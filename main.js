(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['main'],
  {
    /***/ './src/$$_lazy_route_resource lazy recursive':
      /*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        function webpackEmptyAsyncContext(req) {
          // Here Promise.resolve().then() is used instead of new Promise() to prevent
          // uncaught exception popping up in devtools
          return Promise.resolve().then(function() {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }
        webpackEmptyAsyncContext.keys = function() {
          return [];
        };
        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
        module.exports = webpackEmptyAsyncContext;
        webpackEmptyAsyncContext.id =
          './src/$$_lazy_route_resource lazy recursive';

        /***/
      },

    /***/ './src/app/app.component.html':
      /*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<mt-header></mt-header>\n\n<div class="content-wrapper">\n  <router-outlet></router-outlet>\n</div>\n\n<mt-footer></mt-footer>\n';

        /***/
      },

    /***/ './src/app/app.component.ts':
      /*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
      /*! exports provided: AppComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AppComponent',
          function() {
            return AppComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var AppComponent = /** @class */ (function() {
          function AppComponent() {}
          AppComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-root',
                template: __webpack_require__(
                  /*! ./app.component.html */ './src/app/app.component.html'
                )
              }),
              __metadata('design:paramtypes', [])
            ],
            AppComponent
          );
          return AppComponent;
        })();

        /***/
      },

    /***/ './src/app/app.constants.ts':
      /*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
      /*! exports provided: apiUrl, apiLoginUrl, apiTokenPrefix, accessTokenCookieKey, userCookieKey, dashboardUrl, animeSearchUrl, userListUrl, rootUrl, defaultModalOptions */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'apiUrl',
          function() {
            return apiUrl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'apiLoginUrl',
          function() {
            return apiLoginUrl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'apiTokenPrefix',
          function() {
            return apiTokenPrefix;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'accessTokenCookieKey',
          function() {
            return accessTokenCookieKey;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'userCookieKey',
          function() {
            return userCookieKey;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'dashboardUrl',
          function() {
            return dashboardUrl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'animeSearchUrl',
          function() {
            return animeSearchUrl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'userListUrl',
          function() {
            return userListUrl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'rootUrl',
          function() {
            return rootUrl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'defaultModalOptions',
          function() {
            return defaultModalOptions;
          }
        );
        /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../environments/environment */ './src/environments/environment.ts'
        );

        var apiUrl = 'https://graphql.anilist.co';
        var apiLoginUrl =
          'https://anilist.co/api/v2/oauth/authorize?client_id=' +
          _environments_environment__WEBPACK_IMPORTED_MODULE_0__['environment']
            .anilist_client_id +
          '&response_type=token';
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
          maxWidth: '672px'
        };

        /***/
      },

    /***/ './src/app/app.module.ts':
      /*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
      /*! exports provided: AppModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AppModule',
          function() {
            return AppModule;
          }
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/fesm5/common.js'
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @ngx-translate/http-loader */ './node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js'
        );
        /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./app.component */ './src/app/app.component.ts'
        );
        /* harmony import */ var _modules_anime_anime_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./modules/anime/anime.module */ './src/app/modules/anime/anime.module.ts'
        );
        /* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./modules/shared/shared.module */ './src/app/modules/shared/shared.module.ts'
        );
        /* harmony import */ var _pages_anime_detail_anime_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./pages/anime-detail/anime-detail.component */ './src/app/pages/anime-detail/anime-detail.component.ts'
        );
        /* harmony import */ var _pages_anime_search_anime_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./pages/anime-search/anime-search.component */ './src/app/pages/anime-search/anime-search.component.ts'
        );
        /* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./pages/dashboard/dashboard.component */ './src/app/pages/dashboard/dashboard.component.ts'
        );
        /* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./pages/login/login.component */ './src/app/pages/login/login.component.ts'
        );
        /* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./pages/page-not-found/page-not-found.component */ './src/app/pages/page-not-found/page-not-found.component.ts'
        );
        /* harmony import */ var _pages_user_anime_list_user_anime_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./pages/user-anime-list/user-anime-list.component */ './src/app/pages/user-anime-list/user-anime-list.component.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };

        var appRoutes = [
          { path: '', redirectTo: '/anime-search', pathMatch: 'full' },
          {
            path: 'login',
            component:
              _pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__[
                'LoginPageComponent'
              ]
          },
          {
            path: 'dashboard',
            component:
              _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__[
                'DashboardPageComponent'
              ]
          },
          {
            path: 'anime-search',
            component:
              _pages_anime_search_anime_search_component__WEBPACK_IMPORTED_MODULE_10__[
                'AnimeSearchPageComponent'
              ]
          },
          {
            path: 'anime-detail/:id',
            component:
              _pages_anime_detail_anime_detail_component__WEBPACK_IMPORTED_MODULE_9__[
                'AnimeDetailPageComponent'
              ]
          },
          {
            path: 'user-anime-list',
            component:
              _pages_user_anime_list_user_anime_list_component__WEBPACK_IMPORTED_MODULE_14__[
                'UserAnimeListPageComponent'
              ]
          },
          {
            path: '**',
            component:
              _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__[
                'PageNotFoundPageComponent'
              ]
          }
        ];
        var translationFactory = function(translateService, injector) {
          return function() {
            return new Promise(function(resolve) {
              var availableLanguages = ['en-US', 'es-ES'];
              var defaultLanguage = availableLanguages[0];
              injector
                .get(
                  _angular_common__WEBPACK_IMPORTED_MODULE_0__[
                    'LOCATION_INITIALIZED'
                  ],
                  Promise.resolve(null)
                )
                .then(function() {
                  translateService.setDefaultLang(defaultLanguage);
                  translateService
                    .use(
                      availableLanguages.includes(navigator.language)
                        ? navigator.language
                        : defaultLanguage
                    )
                    .subscribe(function() {
                      return resolve(null);
                    });
                });
            });
          };
        };
        var AppModule = /** @class */ (function() {
          function AppModule() {}
          AppModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__['NgModule'])({
                declarations: [
                  _app_component__WEBPACK_IMPORTED_MODULE_6__['AppComponent'],
                  _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__[
                    'PageNotFoundPageComponent'
                  ],
                  _pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__[
                    'LoginPageComponent'
                  ],
                  _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__[
                    'DashboardPageComponent'
                  ],
                  _pages_anime_search_anime_search_component__WEBPACK_IMPORTED_MODULE_10__[
                    'AnimeSearchPageComponent'
                  ],
                  _pages_anime_detail_anime_detail_component__WEBPACK_IMPORTED_MODULE_9__[
                    'AnimeDetailPageComponent'
                  ],
                  _pages_user_anime_list_user_anime_list_component__WEBPACK_IMPORTED_MODULE_14__[
                    'UserAnimeListPageComponent'
                  ]
                ],
                imports: [
                  _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__[
                    'SharedModule'
                  ],
                  _modules_anime_anime_module__WEBPACK_IMPORTED_MODULE_7__[
                    'AnimeModule'
                  ],
                  _angular_router__WEBPACK_IMPORTED_MODULE_3__[
                    'RouterModule'
                  ].forRoot(appRoutes),
                  _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__[
                    'TranslateModule'
                  ].forRoot({
                    loader: {
                      provide:
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__[
                          'TranslateLoader'
                        ],
                      useFactory: function(http) {
                        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__[
                          'TranslateHttpLoader'
                        ](http);
                      },
                      deps: [
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[
                          'HttpClient'
                        ]
                      ]
                    }
                  })
                ],
                providers: [
                  {
                    provide:
                      _angular_core__WEBPACK_IMPORTED_MODULE_2__[
                        'APP_INITIALIZER'
                      ],
                    useFactory: translationFactory,
                    deps: [
                      _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__[
                        'TranslateService'
                      ],
                      _angular_core__WEBPACK_IMPORTED_MODULE_2__['Injector']
                    ],
                    multi: true
                  }
                ],
                bootstrap: [
                  _app_component__WEBPACK_IMPORTED_MODULE_6__['AppComponent']
                ]
              })
            ],
            AppModule
          );
          return AppModule;
        })();

        /***/
      },

    /***/ './src/app/modules/anime/anime.module.ts':
      /*!***********************************************!*\
  !*** ./src/app/modules/anime/anime.module.ts ***!
  \***********************************************/
      /*! exports provided: AnimeModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AnimeModule',
          function() {
            return AnimeModule;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../shared/shared.module */ './src/app/modules/shared/shared.module.ts'
        );
        /* harmony import */ var _api_anime_anime_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./api/anime/anime.api */ './src/app/modules/anime/api/anime/anime.api.ts'
        );
        /* harmony import */ var _components_modals_mt_list_entry_form_modal_mt_list_entry_form_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./components/modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component */ './src/app/modules/anime/components/modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component.ts'
        );
        /* harmony import */ var _components_modals_mt_media_detail_modal_mt_media_detail_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./components/modals/mt-media-detail-modal/mt-media-detail-modal.component */ './src/app/modules/anime/components/modals/mt-media-detail-modal/mt-media-detail-modal.component.ts'
        );
        /* harmony import */ var _components_mt_anime_info_mt_anime_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./components/mt-anime-info/mt-anime-info.component */ './src/app/modules/anime/components/mt-anime-info/mt-anime-info.component.ts'
        );
        /* harmony import */ var _components_mt_cover_media_mt_cover_media_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./components/mt-cover-media/mt-cover-media.component */ './src/app/modules/anime/components/mt-cover-media/mt-cover-media.component.ts'
        );
        /* harmony import */ var _components_mt_genres_overview_mt_genres_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./components/mt-genres-overview/mt-genres-overview.component */ './src/app/modules/anime/components/mt-genres-overview/mt-genres-overview.component.ts'
        );
        /* harmony import */ var _components_mt_list_related_media_mt_list_related_media_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./components/mt-list-related-media/mt-list-related-media.component */ './src/app/modules/anime/components/mt-list-related-media/mt-list-related-media.component.ts'
        );
        /* harmony import */ var _components_mt_media_actions_mt_media_actions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./components/mt-media-actions/mt-media-actions.component */ './src/app/modules/anime/components/mt-media-actions/mt-media-actions.component.ts'
        );
        /* harmony import */ var _components_mt_recently_finished_media_by_format_mt_recently_finished_media_by_format_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./components/mt-recently-finished-media-by-format/mt-recently-finished-media-by-format.component */ './src/app/modules/anime/components/mt-recently-finished-media-by-format/mt-recently-finished-media-by-format.component.ts'
        );
        /* harmony import */ var _components_mt_recently_finished_media_mt_recently_finished_media_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./components/mt-recently-finished-media/mt-recently-finished-media.component */ './src/app/modules/anime/components/mt-recently-finished-media/mt-recently-finished-media.component.ts'
        );
        /* harmony import */ var _components_mt_recently_updated_list_entries_mt_recently_updated_list_entries_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./components/mt-recently-updated-list-entries/mt-recently-updated-list-entries.component */ './src/app/modules/anime/components/mt-recently-updated-list-entries/mt-recently-updated-list-entries.component.ts'
        );
        /* harmony import */ var _components_mt_search_results_table_mt_search_results_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./components/mt-search-results-table/mt-search-results-table.component */ './src/app/modules/anime/components/mt-search-results-table/mt-search-results-table.component.ts'
        );
        /* harmony import */ var _components_mt_user_anime_list_table_mt_user_anime_list_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./components/mt-user-anime-list-table/mt-user-anime-list-table.component */ './src/app/modules/anime/components/mt-user-anime-list-table/mt-user-anime-list-table.component.ts'
        );
        /* harmony import */ var _services_anime_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./services/anime.service */ './src/app/modules/anime/services/anime.service.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };

        var declarations = [
          _components_mt_anime_info_mt_anime_info_component__WEBPACK_IMPORTED_MODULE_5__[
            'MtAnimeInfoComponent'
          ],
          _components_mt_cover_media_mt_cover_media_component__WEBPACK_IMPORTED_MODULE_6__[
            'MtCoverMediaComponent'
          ],
          _components_mt_genres_overview_mt_genres_overview_component__WEBPACK_IMPORTED_MODULE_7__[
            'MtGenresOverviewComponent'
          ],
          _components_modals_mt_list_entry_form_modal_mt_list_entry_form_modal_component__WEBPACK_IMPORTED_MODULE_3__[
            'MtListEntryFormModalComponent'
          ],
          _components_mt_list_related_media_mt_list_related_media_component__WEBPACK_IMPORTED_MODULE_8__[
            'MtListRelatedMediaComponent'
          ],
          _components_mt_media_actions_mt_media_actions_component__WEBPACK_IMPORTED_MODULE_9__[
            'MtMediaActionsComponent'
          ],
          _components_modals_mt_media_detail_modal_mt_media_detail_modal_component__WEBPACK_IMPORTED_MODULE_4__[
            'MtMediaDetailModalComponent'
          ],
          _components_mt_recently_finished_media_by_format_mt_recently_finished_media_by_format_component__WEBPACK_IMPORTED_MODULE_10__[
            'MtRecentlyFinishedMediaByFormatComponent'
          ],
          _components_mt_recently_finished_media_mt_recently_finished_media_component__WEBPACK_IMPORTED_MODULE_11__[
            'MtRecentlyFinishedMediaComponent'
          ],
          _components_mt_recently_updated_list_entries_mt_recently_updated_list_entries_component__WEBPACK_IMPORTED_MODULE_12__[
            'MtRecentlyUpdatedListEntriesComponent'
          ],
          _components_mt_search_results_table_mt_search_results_table_component__WEBPACK_IMPORTED_MODULE_13__[
            'MtSearchResultsTableComponent'
          ],
          _components_mt_user_anime_list_table_mt_user_anime_list_table_component__WEBPACK_IMPORTED_MODULE_14__[
            'MtUserAnimeListTableComponent'
          ]
        ];
        var AnimeModule = /** @class */ (function() {
          function AnimeModule() {}
          AnimeModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: declarations,
                imports: [
                  _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__[
                    'SharedModule'
                  ]
                ],
                exports: declarations,
                entryComponents: [
                  _components_modals_mt_list_entry_form_modal_mt_list_entry_form_modal_component__WEBPACK_IMPORTED_MODULE_3__[
                    'MtListEntryFormModalComponent'
                  ],
                  _components_modals_mt_media_detail_modal_mt_media_detail_modal_component__WEBPACK_IMPORTED_MODULE_4__[
                    'MtMediaDetailModalComponent'
                  ]
                ],
                providers: [
                  _api_anime_anime_api__WEBPACK_IMPORTED_MODULE_2__['AnimeApi'],
                  _services_anime_service__WEBPACK_IMPORTED_MODULE_15__[
                    'AnimeService'
                  ]
                ]
              })
            ],
            AnimeModule
          );
          return AnimeModule;
        })();

        /***/
      },

    /***/ './src/app/modules/anime/api/anime/anime-api.queries.ts':
      /*!**************************************************************!*\
  !*** ./src/app/modules/anime/api/anime/anime-api.queries.ts ***!
  \**************************************************************/
      /*! exports provided: genresQuery, userQuery, mediaIdSearchQuery, mediaSearchQuery, listQuery, relatedMediaQuery, listMediaIdsQuery, updatedEntriesQuery, finishedAiringMediaQuery, listFavouritesQuery, saveListEntryQuery, deleteListEntryQuery, toggleFavouriteEntryQuery */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'genresQuery',
          function() {
            return genresQuery;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'userQuery',
          function() {
            return userQuery;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'mediaIdSearchQuery',
          function() {
            return mediaIdSearchQuery;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'mediaSearchQuery',
          function() {
            return mediaSearchQuery;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'listQuery',
          function() {
            return listQuery;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'relatedMediaQuery',
          function() {
            return relatedMediaQuery;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'listMediaIdsQuery',
          function() {
            return listMediaIdsQuery;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'updatedEntriesQuery',
          function() {
            return updatedEntriesQuery;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'finishedAiringMediaQuery',
          function() {
            return finishedAiringMediaQuery;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'listFavouritesQuery',
          function() {
            return listFavouritesQuery;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'saveListEntryQuery',
          function() {
            return saveListEntryQuery;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'deleteListEntryQuery',
          function() {
            return deleteListEntryQuery;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'toggleFavouriteEntryQuery',
          function() {
            return toggleFavouriteEntryQuery;
          }
        );
        var filterTypes = {};
        var filterMappings = {};
        /* filters */
        filterTypes.page = '\n  $page: Int,\n  $perPage: Int,\n';
        filterMappings.page = '\n  page: $page,\n  perPage: $perPage,\n';
        filterTypes.mediaCollection =
          '\n  $mediaType: MediaType,\n  $sort: [MediaListSort],\n  $userId: Int!,\n';
        filterMappings.mediaCollection =
          '\n  sort: $sort,\n  type: $mediaType,\n  userId: $userId,\n';
        filterTypes.media =
          '\n  $mediaType: MediaType,\n  $sort: [MediaSort],\n  $adultContent: Boolean,\n  $averageScoreGreaterThan: Int,\n  $averageScoreSmallerThan: Int,\n  $genreIn: [String],\n  $genreNotIn: [String],\n  $formatIn: [MediaFormat],\n  $formatNotIn: [MediaFormat],\n  $statusIn: [MediaStatus],\n  $statusNotIn: [MediaStatus],\n  $search: String,\n  $startDateGreaterThan: FuzzyDateInt,\n  $startDateSmallerThan: FuzzyDateInt,\n  $status: MediaStatus,\n  $id: Int,\n  $idIn: [Int],\n  $idNotIn: [Int],\n  $onList: Boolean,\n';
        filterMappings.media =
          '\n  sort: $sort,\n  type: $mediaType,\n  isAdult: $adultContent,\n  averageScore_greater: $averageScoreGreaterThan,\n  averageScore_lesser: $averageScoreSmallerThan,\n  genre_in: $genreIn,\n  genre_not_in: $genreNotIn,\n  format_in: $formatIn,\n  format_not_in: $formatNotIn,\n  status_in: $statusIn,\n  status_not_in: $statusNotIn,\n  search: $search,\n  startDate_greater: $startDateGreaterThan,\n  startDate_lesser: $startDateSmallerThan,\n  status: $status,\n  id: $id,\n  id_in: $idIn,\n  id_not_in: $idNotIn,\n  onList: $onList,\n';
        /* fields */
        var pageInfoFields =
          '\n  currentPage\n  hasNextPage\n  lastPage\n  perPage\n  total\n';
        var listEntryFields =
          '\n  id\n  scoreRaw: score (\n    format: POINT_100\n  )\n  status\n  updatedAt\n';
        var listEntryFieldsWithMediaId =
          listEntryFields + '\n  media {\n    id\n  }\n';
        var mediaFields =
          '\n  id\n  mediaListEntry {\n    ' + listEntryFields + '\n  }\n';
        var animeFields =
          mediaFields +
          '\n  averageScore\n  coverImage {\n    large\n    medium\n  }\n  description\n  duration\n  episodes\n  format\n  genres\n  id\n  startDate {\n    year\n  }\n  status\n  studios(isMain: true) {\n    nodes {\n      name\n    }\n  }\n  tags {\n    description\n    isMediaSpoiler\n    name\n  }\n  title {\n    romaji\n  }\n';
        var animeListEntryFields =
          listEntryFields + '\n  media {\n    ' + animeFields + '\n  }\n';
        /* queries */
        var genresQuery = '\n  {\n    GenreCollection\n  }\n';
        var userQuery =
          '\n  {\n    Viewer {\n      avatar {\n        large\n      }\n      id\n      name\n      options {\n        displayAdultContent\n      }\n      stats {\n        favouredGenresOverview {\n          amount\n          genre\n          meanScore\n          timeWatched\n        }\n        watchedTime\n      }\n    }\n  }\n';
        var mediaIdSearchQuery =
          '\n  query (\n    ' +
          filterTypes.media +
          '\n    ' +
          filterTypes.page +
          '\n  ) {\n    Page (\n      ' +
          filterMappings.page +
          '\n    ) {\n      pageInfo {\n        ' +
          pageInfoFields +
          '\n      }\n      media (\n        ' +
          filterMappings.media +
          '\n      ) {\n        ' +
          mediaFields +
          '\n      }\n    }\n  }\n';
        var mediaSearchQuery =
          '\n  query (\n    ' +
          filterTypes.media +
          '\n    ' +
          filterTypes.page +
          '\n  ) {\n    Page (\n      ' +
          filterMappings.page +
          '\n    ) {\n      pageInfo {\n        ' +
          pageInfoFields +
          '\n      }\n      media (\n        ' +
          filterMappings.media +
          '\n      ) {\n        ' +
          animeFields +
          '\n      }\n    }\n  }\n';
        var listQuery =
          '\n  query (\n    ' +
          filterTypes.mediaCollection +
          '\n  ) {\n    MediaListCollection (\n      ' +
          filterMappings.mediaCollection +
          '\n    ) {\n      lists {\n        entries {\n          ' +
          animeListEntryFields +
          '\n        }\n      }\n    }\n  }\n';
        var relatedMediaQuery =
          '\n  query (\n    ' +
          filterTypes.mediaCollection +
          '\n  ) {\n    MediaListCollection (\n      ' +
          filterMappings.mediaCollection +
          '\n    ) {\n      lists {\n        entries {\n          status\n          media {\n            relations {\n              nodes {\n                ' +
          animeFields +
          '\n              }\n            }\n          }\n        }\n      }\n';
        var listMediaIdsQuery =
          '\n  query (\n    ' +
          filterTypes.mediaCollection +
          '\n  ) {\n    MediaListCollection (\n      ' +
          filterMappings.mediaCollection +
          '\n    ) {\n      lists {\n        entries {\n          status\n          media {\n            id\n          }\n        }\n      }\n    }\n  }\n';
        var updatedEntriesQuery =
          '\n  query (\n    ' +
          filterTypes.mediaCollection +
          '\n    ' +
          filterTypes.page +
          '\n  ) {\n    Page (\n      ' +
          filterMappings.page +
          '\n    ) {\n      pageInfo {\n        ' +
          pageInfoFields +
          '\n      }\n      mediaList (\n        ' +
          filterMappings.mediaCollection +
          '\n      ) {\n        ' +
          listEntryFieldsWithMediaId +
          '\n      }\n    }\n  }\n';
        var finishedAiringMediaQuery =
          '\n  query (\n    ' +
          filterTypes.media +
          '\n    ' +
          filterTypes.page +
          '\n  ) {\n    Page (\n      ' +
          filterMappings.page +
          '\n    ) {\n      pageInfo {\n        ' +
          pageInfoFields +
          '\n      }\n      media (\n        ' +
          filterMappings.media +
          '\n      ) {\n        ' +
          mediaFields +
          '\n      }\n    }\n  }\n';
        var listFavouritesQuery =
          '\n  query (\n    $userId: Int!,\n    $page: Int\n  ) {\n    User (\n      id: $userId\n    ) {\n      favourites {\n        anime (\n          page: $page\n        ) {\n          nodes {\n            id\n          }\n          pageInfo {\n            ' +
          pageInfoFields +
          '\n          }\n        }\n      }\n    }\n  }\n';
        var saveListEntryQuery =
          '\n  mutation (\n    $mediaId: Int,\n    $scoreRaw: Int,\n    $status: MediaListStatus\n  ) {\n    SaveMediaListEntry (\n      mediaId: $mediaId,\n      scoreRaw: $scoreRaw,\n      status: $status\n      ) {\n        id\n        score\n        status\n        media {\n          title {\n            romaji\n          }\n        }\n      }\n    }\n  ';
        var deleteListEntryQuery =
          '\n  mutation (\n    $id: Int\n  ) {\n    DeleteMediaListEntry (id: $id) {\n      deleted\n    }\n  }\n';
        var toggleFavouriteEntryQuery =
          '\n  mutation (\n    $animeId: Int\n  ) {\n    ToggleFavourite (\n      animeId: $animeId\n    ) {\n      anime {\n        nodes {\n          id\n          title {\n            romaji\n          }\n        }\n      }\n    }\n  }\n';

        /***/
      },

    /***/ './src/app/modules/anime/api/anime/anime.api.ts':
      /*!******************************************************!*\
  !*** ./src/app/modules/anime/api/anime/anime.api.ts ***!
  \******************************************************/
      /*! exports provided: AnimeApi */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AnimeApi',
          function() {
            return AnimeApi;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/api/api */ './src/app/modules/shared/api/api.ts'
        );
        /* harmony import */ var _shared_store_auth_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/store/auth.store */ './src/app/modules/shared/store/auth.store.ts'
        );
        /* harmony import */ var _anime_api_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./anime-api.queries */ './src/app/modules/anime/api/anime/anime-api.queries.ts'
        );
        var __extends =
          (undefined && undefined.__extends) ||
          (function() {
            var extendStatics = function(d, b) {
              extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype =
                b === null
                  ? Object.create(b)
                  : ((__.prototype = b.prototype), new __());
            };
          })();
        var __assign =
          (undefined && undefined.__assign) ||
          function() {
            __assign =
              Object.assign ||
              function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                  s = arguments[i];
                  for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
              };
            return __assign.apply(this, arguments);
          };
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var AnimeApi = /** @class */ (function(_super) {
          __extends(AnimeApi, _super);
          function AnimeApi(httpClient, authStore) {
            var _this = _super.call(this, httpClient, authStore) || this;
            _this.httpClient = httpClient;
            _this.authStore = authStore;
            return _this;
          }
          AnimeApi.prototype.queryAnimeGenres = function() {
            var _this = this;
            return this.postGraphQlRequest(
              _anime_api_queries__WEBPACK_IMPORTED_MODULE_5__['genresQuery']
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(
                function(response) {
                  return _this.getResponseData(response).GenreCollection;
                }
              )
            );
          };
          AnimeApi.prototype.queryAnimeFromIds = function(mediaIds) {
            var _this = this;
            return this.postGraphQlRequest(
              _anime_api_queries__WEBPACK_IMPORTED_MODULE_5__[
                'mediaSearchQuery'
              ],
              {
                mediaType: 'ANIME',
                idIn: mediaIds,
                sort: 'TITLE_ROMAJI',
                perPage: mediaIds.length
              }
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(
                function(response) {
                  return _this.getResponseData(response).Page.media;
                }
              )
            );
          };
          AnimeApi.prototype.queryAnimeSearch = function(query, pageInfo) {
            var _this = this;
            return this.postGraphQlRequest(
              _anime_api_queries__WEBPACK_IMPORTED_MODULE_5__[
                'mediaIdSearchQuery'
              ],
              __assign({}, this.getPageOptions(pageInfo), query, {
                mediaType: 'ANIME',
                adultContent: query.adultContent || false,
                sort: query.sort || 'TITLE_ROMAJI'
              })
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(
                function(response) {
                  return _this.getResponseData(response).Page;
                }
              )
            );
          };
          AnimeApi.prototype.queryAnimeList = function(user) {
            var _this = this;
            return this.postGraphQlRequest(
              _anime_api_queries__WEBPACK_IMPORTED_MODULE_5__['listQuery'],
              {
                mediaType: 'ANIME',
                userId: user.id,
                sort: 'UPDATED_TIME_DESC'
              }
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(
                function(response) {
                  var listEntriesByStatus = {};
                  var listMediaDto = _this.getResponseData(response);
                  if (listMediaDto) {
                    listMediaDto.MediaListCollection.lists.forEach(function(
                      list
                    ) {
                      var status = list.entries[0].status;
                      list.entries.forEach(function(listEntry) {
                        listEntriesByStatus[status] = (
                          listEntriesByStatus[status] || []
                        ).concat([listEntry]);
                      });
                    });
                  }
                  return listEntriesByStatus;
                }
              )
            );
          };
          AnimeApi.prototype.queryAnimeListMediaIdsByStatus = function(user) {
            var _this = this;
            return this.postGraphQlRequest(
              _anime_api_queries__WEBPACK_IMPORTED_MODULE_5__[
                'listMediaIdsQuery'
              ],
              {
                mediaType: 'ANIME',
                userId: user.id
              }
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(
                function(response) {
                  var listMediaIdsByStatus = {};
                  var listMediaDto = _this.getResponseData(response);
                  if (listMediaDto) {
                    listMediaDto.MediaListCollection.lists.forEach(function(
                      list
                    ) {
                      var status = list.entries[0].status;
                      list.entries.forEach(function(listEntry) {
                        listMediaIdsByStatus[status] = (
                          listMediaIdsByStatus[status] || []
                        ).concat([listEntry.media.id]);
                      });
                    });
                  }
                  return listMediaIdsByStatus;
                }
              )
            );
          };
          AnimeApi.prototype.queryRecentlyUpdatedAnime = function(
            user,
            pageInfo
          ) {
            var _this = this;
            return this.postGraphQlRequest(
              _anime_api_queries__WEBPACK_IMPORTED_MODULE_5__[
                'updatedEntriesQuery'
              ],
              __assign({}, this.getPageOptions(pageInfo), {
                mediaType: 'ANIME',
                userId: user.id,
                sort: 'UPDATED_TIME_DESC'
              })
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(
                function(response) {
                  return _this.getResponseData(response).Page;
                }
              )
            );
          };
          AnimeApi.prototype.queryRecentlyFinishedAiringAnime = function(
            query,
            pageInfo
          ) {
            var _this = this;
            return this.postGraphQlRequest(
              _anime_api_queries__WEBPACK_IMPORTED_MODULE_5__[
                'finishedAiringMediaQuery'
              ],
              __assign({}, this.getPageOptions(pageInfo), query, {
                mediaType: 'ANIME',
                status: 'FINISHED',
                sort: 'END_DATE_DESC',
                onList: true
              })
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(
                function(response) {
                  return _this.getResponseData(response).Page;
                }
              )
            );
          };
          AnimeApi.prototype.queryRelatedAnimeMedia = function(user) {
            var _this = this;
            return this.postGraphQlRequest(
              _anime_api_queries__WEBPACK_IMPORTED_MODULE_5__[
                'relatedMediaQuery'
              ],
              {
                mediaType: 'ANIME',
                userId: user.id
              }
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(
                function(response) {
                  var mediaList = [];
                  var listMediaDto = _this.getResponseData(response);
                  if (listMediaDto) {
                    listMediaDto.MediaListCollection.lists.forEach(function(
                      list
                    ) {
                      list.entries.forEach(function(listEntry) {
                        mediaList = mediaList.concat([listEntry.media]);
                      });
                    });
                  }
                  return mediaList;
                }
              )
            );
          };
          AnimeApi.prototype.queryAnimeListFavouriteIDs = function(
            user,
            callback
          ) {
            this.queryFavouriteIdsResultsPage(
              {
                userId: user.id,
                page: 0
              },
              [],
              callback
            );
          };
          AnimeApi.prototype.queryFavouriteIdsResultsPage = function(
            options,
            favouriteIds,
            callback
          ) {
            var _this = this;
            return this.postGraphQlRequest(
              _anime_api_queries__WEBPACK_IMPORTED_MODULE_5__[
                'listFavouritesQuery'
              ],
              options
            )
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(
                  function(response) {
                    var responseData = _this.getResponseData(response);
                    if (
                      responseData &&
                      responseData.User &&
                      responseData.User.favourites &&
                      responseData.User.favourites.anime
                    ) {
                      var favouritesData = responseData.User.favourites.anime;
                      favouriteIds = favouriteIds.concat(
                        favouritesData.nodes.map(function(node) {
                          return node.id;
                        })
                      );
                      if (favouritesData.pageInfo.hasNextPage) {
                        options.page++;
                        _this.queryFavouriteIdsResultsPage(
                          options,
                          favouriteIds,
                          callback
                        );
                      } else {
                        callback(favouriteIds);
                      }
                    }
                  }
                )
              )
              .subscribe();
          };
          AnimeApi.prototype.saveAnimeListEntry = function(listEntry) {
            var _this = this;
            return this.postGraphQlRequest(
              _anime_api_queries__WEBPACK_IMPORTED_MODULE_5__[
                'saveListEntryQuery'
              ],
              {
                status: listEntry.status || 'COMPLETED',
                mediaId: listEntry.media.id,
                scoreRaw: listEntry.scoreRaw
              }
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(
                function(response) {
                  return _this.getResponseData(response).SaveMediaListEntry;
                }
              )
            );
          };
          AnimeApi.prototype.deleteAnimeListEntry = function(listEntry) {
            var _this = this;
            return this.postGraphQlRequest(
              _anime_api_queries__WEBPACK_IMPORTED_MODULE_5__[
                'deleteListEntryQuery'
              ],
              {
                id: listEntry.id
              }
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(
                function(response) {
                  return _this.getResponseData(response).DeleteMediaListEntry;
                }
              )
            );
          };
          AnimeApi.prototype.toggleAnimeFavouriteEntry = function(listEntry) {
            var _this = this;
            return this.postGraphQlRequest(
              _anime_api_queries__WEBPACK_IMPORTED_MODULE_5__[
                'toggleFavouriteEntryQuery'
              ],
              {
                animeId: listEntry.media.id
              }
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(
                function(response) {
                  return _this.getResponseData(response).ToggleFavourite;
                }
              )
            );
          };
          AnimeApi = __decorate(
            [
              Object(
                _angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable']
              )(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_store_auth_store__WEBPACK_IMPORTED_MODULE_4__[
                  'AuthStore'
                ]
              ])
            ],
            AnimeApi
          );
          return AnimeApi;
        })(_shared_api_api__WEBPACK_IMPORTED_MODULE_3__['AniListApi']);

        /***/
      },

    /***/ './src/app/modules/anime/components/modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component.html':
      /*!******************************************************************************************************************!*\
  !*** ./src/app/modules/anime/components/modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component.html ***!
  \******************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<mt-modal>\n  <mt-modal-header (onClosePressed)="dismiss()">\n    {{ media.title.romaji }}\n  </mt-modal-header>\n\n  <form [formGroup]="listEntryForm" (ngSubmit)="saveEntry()">\n    <mt-modal-content>\n      <!-- status -->\n      <div class="form-group">\n        <mat-form-field>\n          <mat-select placeholder="{{ \'media.status\' | translate }}" formControlName="status">\n            <mat-option *ngFor="let status of listEntryStatusList" [value]="status">\n              {{ \'anime.statusValues.\' + status | translate }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n\n      <!-- score -->\n      <div class="form-group">\n        <mat-form-field class="score-input">\n          <mat-label>{{ \'media.score\' | translate }}</mat-label>\n          <input\n            matInput\n            type="number"\n            min="0"\n            max="10"\n            step=".1"\n            [placeholder]="listEntry ? listEntry.scoreRaw / 10 : 5"\n            formControlName="score"\n          />\n        </mat-form-field>\n        / 10\n      </div>\n\n      <!--<mat-slider min="0" max="10" value="5" step="0.5" tickInterval="2" class="full-width no-padding"></mat-slider>-->\n\n      <!--<span *ngIf="listEntry !== undefined">-->\n      <!--<button mat-raised-button color="warn" class="margin-right-s square-button" (click)="doDeleteEntry($event)">-->\n      <!--<fa-icon name="trash" class="baseline"></fa-icon>-->\n      <!--</button>-->\n      <!--</span>-->\n    </mt-modal-content>\n\n    <mat-divider></mat-divider>\n\n    <mt-modal-footer>\n      <span class="float-right">\n        <button\n          mat-raised-button\n          color="accent"\n          class="margin-right-xs"\n          [disabled]="!listEntryForm.valid || !isSubmitEnabled()"\n        >\n          <fa-icon name="save" class="baseline margin-right-xxxs"></fa-icon>\n          {{ \'generic.submit\' | translate }}\n        </button>\n\n        <button mat-raised-button class="float-right" (click)="dismiss($event)">\n          <fa-icon name="times" class="baseline margin-right-xxxs"></fa-icon>\n          {{ \'generic.cancel\' | translate }}\n        </button>\n      </span>\n    </mt-modal-footer>\n  </form>\n</mt-modal>\n';

        /***/
      },

    /***/ './src/app/modules/anime/components/modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component.scss':
      /*!******************************************************************************************************************!*\
  !*** ./src/app/modules/anime/components/modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component.scss ***!
  \******************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\n.content .form-group {\n  margin: auto; }\n.content mat-form-field {\n  width: 100%; }\n.content mat-form-field.score-input {\n    width: 72px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbmltZS9jb21wb25lbnRzL21vZGFscy9tdC1saXN0LWVudHJ5LWZvcm0tbW9kYWwvWjpcXFR4dXNcXFByb2plY3RzXFx3ZWJcXHVub2ZmaWNpYWwtbmc1LWFuaWxpc3QtY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FuaW1lL2NvbXBvbmVudHMvbW9kYWxzL210LWxpc3QtZW50cnktZm9ybS1tb2RhbC9aOlxcVHh1c1xcUHJvamVjdHNcXHdlYlxcdW5vZmZpY2lhbC1uZzUtYW5pbGlzdC1jbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGFuaW1lXFxjb21wb25lbnRzXFxtb2RhbHNcXG10LWxpc3QtZW50cnktZm9ybS1tb2RhbFxcbXQtbGlzdC1lbnRyeS1mb3JtLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQUE7QUFZQSxlQUFBO0FBUUEsaUJBQUE7QUFTQSxhQUFBO0FBSUEsV0FBQTtBQUlBLFlBQUE7QUFPQSxhQUFBO0FDMUNBO0VBR0ksWUFBWSxFQUFBO0FBSGhCO0VBT0ksV0FBVyxFQUFBO0FBUGY7SUFVTSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FuaW1lL2NvbXBvbmVudHMvbW9kYWxzL210LWxpc3QtZW50cnktZm9ybS1tb2RhbC9tdC1saXN0LWVudHJ5LWZvcm0tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzcGFjaW5nICovXG4kc3BhY2luZy14eHh4czogMnB4O1xuJHNwYWNpbmcteHh4czogNHB4O1xuJHNwYWNpbmcteHhzOiA4cHg7XG4kc3BhY2luZy14czogMTZweDtcbiRzcGFjaW5nLXM6IDI0cHg7XG4kc3BhY2luZy1tOiAzMnB4O1xuJHNwYWNpbmctbDogNDhweDtcbiRzcGFjaW5nLXhsOiA2NHB4O1xuJHNwYWNpbmcteHhsOiA5NnB4O1xuJHNwYWNpbmcteHh4bDogMTI4cHg7XG5cbi8qIGZvbnQgc2l6ZXMgKi9cbiRmb250LXNpemUteHM6IDEycHg7XG4kZm9udC1zaXplLXM6IDE0cHg7XG4kZm9udC1zaXplLW06IDE2cHg7XG4kZm9udC1zaXplLWw6IDIwcHg7XG4kZm9udC1zaXplLXhsOiAyNHB4O1xuJGZvbnQtc2l6ZS14eGw6IDI4cHg7XG5cbi8qIGRldmljZSBzaXplcyAqL1xuJHNjcmVlbi14eHhzOiAzMjBweDtcbiRzY3JlZW4teHhzOiA0ODBweDtcbiRzY3JlZW4teHM6IDU3NnB4O1xuJHNjcmVlbi1zOiA3NjhweDtcbiRzY3JlZW4tbTogMTAyNHB4O1xuJHNjcmVlbi1sOiAxMzYwcHg7XG4kc2NyZWVuLXhsOiAxOTIwcHg7XG5cbi8qIG1hdGVyaWFsICovXG4kbWF0LXRvb2xiYXItaGVpZ2h0OiA2NHB4O1xuJG1hdC1zcGlubmVyLXNpemU6IDEyOHB4O1xuXG4vKiBtb2RhbHMgKi9cbiRtb2RhbC1oZWFkZXItaGVpZ2h0OiA3MHB4O1xuJG1vZGFsLWZvb3Rlci1oZWlnaHQ6IDg0cHg7XG5cbi8qIGdlbmVyaWMgKi9cbiRwYWdlLXBhZGRpbmc6ICRzcGFjaW5nLW07XG4kY2FyZC1wYWRkaW5nOiAkc3BhY2luZy1zO1xuJGV4cGFuc2lvbi1wYW5lbC1wYWRkaW5nOiAkc3BhY2luZy1zO1xuJG1heC1pbnB1dC1zaXplOiA2NDBweDtcbiRzZXBhcmF0b3ItdGhpY2tuZXNzOiAxcHg7XG5cbi8qIHNwZWNpZmljICovXG4kZm9vdGVyLWhlaWdodDogMTAzcHg7XG4iLCJAaW1wb3J0ICdzcmMvYXBwL3N0eWxlcy92YXJpYWJsZXMnO1xuXG4uY29udGVudCB7XG4gIC5mb3JtLWdyb3VwIHtcbiAgICAvL21heC13aWR0aDogJG1heC1pbnB1dC1zaXplIC8gMjtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuICBtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAmLnNjb3JlLWlucHV0IHtcbiAgICAgIHdpZHRoOiA3MnB4O1xuICAgIH1cbiAgfVxufVxuIl19 */';

        /***/
      },

    /***/ './src/app/modules/anime/components/modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component.ts':
      /*!****************************************************************************************************************!*\
  !*** ./src/app/modules/anime/components/modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component.ts ***!
  \****************************************************************************************************************/
      /*! exports provided: MtListEntryFormModalComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MtListEntryFormModalComponent',
          function() {
            return MtListEntryFormModalComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js'
        );
        /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/material */ './node_modules/@angular/material/esm5/material.es5.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _services_anime_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../services/anime.service */ './src/app/modules/anime/services/anime.service.ts'
        );
        var __assign =
          (undefined && undefined.__assign) ||
          function() {
            __assign =
              Object.assign ||
              function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                  s = arguments[i];
                  for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
              };
            return __assign.apply(this, arguments);
          };
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };
        var __param =
          (undefined && undefined.__param) ||
          function(paramIndex, decorator) {
            return function(target, key) {
              decorator(target, key, paramIndex);
            };
          };

        var MtListEntryFormModalComponent = /** @class */ (function() {
          function MtListEntryFormModalComponent(
            animeService,
            formBuilder,
            dialogRef,
            data
          ) {
            this.animeService = animeService;
            this.formBuilder = formBuilder;
            this.dialogRef = dialogRef;
            this.data = data;
            this.listEntryStatusList = [
              'COMPLETED',
              'DROPPED',
              'PAUSED',
              'PLANNING',
              'REPEATING',
              'CURRENT'
            ];
            this.listEntry = data.listEntry;
            this.media = data.media;
            if (this.listEntry) {
              this.originalEntry = __assign({}, this.listEntry);
            }
            this.listEntryForm = this.formBuilder.group({
              status: [
                this.originalEntry && this.originalEntry.status
                  ? this.originalEntry.status
                  : 'COMPLETED',
                [
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators']
                    .required
                ]
              ],
              score: [
                this.originalEntry &&
                  this.originalEntry.scoreRaw &&
                  this.originalEntry.scoreRaw / 10,
                [
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].max(
                    10
                  ),
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].min(
                    0
                  )
                ]
              ]
            });
          }
          MtListEntryFormModalComponent.prototype.saveEntry = function() {
            var _this = this;
            var entryToSave = this.getFormEntry();
            this.animeService
              .saveAnimeListEntry(entryToSave)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['tap'])(
                  function(savedListEntry) {
                    var success = savedListEntry.id !== undefined;
                    if (success) {
                      if (_this.listEntry) {
                        _this.listEntry = __assign(
                          {},
                          _this.listEntry,
                          savedListEntry
                        );
                      }
                      _this.dialogRef.close({ savedListEntry: savedListEntry });
                    }
                  }
                )
              )
              .subscribe();
          };
          MtListEntryFormModalComponent.prototype.deleteEntry = function(
            event
          ) {
            var _this = this;
            this.preventDefault(event);
            this.animeService
              .deleteAnimeListEntry(this.listEntry)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['tap'])(
                  function(deletedListEntry) {
                    var success = deletedListEntry.deleted === true;
                    if (success) {
                      _this.dialogRef.close({
                        deletedListEntry: deletedListEntry
                      });
                    }
                  }
                )
              )
              .subscribe();
          };
          MtListEntryFormModalComponent.prototype.dismiss = function(event) {
            this.preventDefault(event);
            this.dialogRef.close();
          };
          MtListEntryFormModalComponent.prototype.isSubmitEnabled = function() {
            return (
              !this.originalEntry || this.getFormEntry() !== this.originalEntry
            );
          };
          MtListEntryFormModalComponent.prototype.getFormEntry = function() {
            return {
              media: this.media,
              scoreRaw: Math.trunc(this.listEntryForm.value.score * 10),
              status: this.listEntryForm.value.status
            };
          };
          MtListEntryFormModalComponent.prototype.preventDefault = function(
            event
          ) {
            if (event) {
              event.preventDefault();
            }
          };
          MtListEntryFormModalComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-list-entry-form-modal',
                template: __webpack_require__(
                  /*! ./mt-list-entry-form-modal.component.html */ './src/app/modules/anime/components/modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./mt-list-entry-form-modal.component.scss */ './src/app/modules/anime/components/modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component.scss'
                  )
                ]
              }),
              __param(
                3,
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Inject'])(
                  _angular_material__WEBPACK_IMPORTED_MODULE_2__[
                    'MAT_DIALOG_DATA'
                  ]
                )
              ),
              __metadata('design:paramtypes', [
                _services_anime_service__WEBPACK_IMPORTED_MODULE_4__[
                  'AnimeService'
                ],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormBuilder'],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__['MatDialogRef'],
                Object
              ])
            ],
            MtListEntryFormModalComponent
          );
          return MtListEntryFormModalComponent;
        })();

        /***/
      },

    /***/ './src/app/modules/anime/components/modals/mt-media-detail-modal/mt-media-detail-modal.component.html':
      /*!************************************************************************************************************!*\
  !*** ./src/app/modules/anime/components/modals/mt-media-detail-modal/mt-media-detail-modal.component.html ***!
  \************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<mt-modal>\n  <mt-modal-header (onClosePressed)="dismiss()">\n    <mt-media-actions *ngIf="media" [media]="media" [fromModal]="true" class="inline-block margin-right-xxxs">\n    </mt-media-actions>\n\n    {{ media.title.romaji }}\n  </mt-modal-header>\n\n  <mt-modal-content>\n    <mt-anime-info *ngIf="media" [anime]="media" [generalInfoOnly]="true"> </mt-anime-info>\n  </mt-modal-content>\n\n  <mt-modal-footer>\n    <button mat-raised-button color="accent" (click)="goToDetail()">\n      <fa-icon name="newspaper" class="baseline margin-right-xxxs"></fa-icon>\n      {{ \'media.goToDetail\' | translate }}\n    </button>\n  </mt-modal-footer>\n</mt-modal>\n';

        /***/
      },

    /***/ './src/app/modules/anime/components/modals/mt-media-detail-modal/mt-media-detail-modal.component.scss':
      /*!************************************************************************************************************!*\
  !*** ./src/app/modules/anime/components/modals/mt-media-detail-modal/mt-media-detail-modal.component.scss ***!
  \************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW5pbWUvY29tcG9uZW50cy9tb2RhbHMvbXQtbWVkaWEtZGV0YWlsLW1vZGFsL210LW1lZGlhLWRldGFpbC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */';

        /***/
      },

    /***/ './src/app/modules/anime/components/modals/mt-media-detail-modal/mt-media-detail-modal.component.ts':
      /*!**********************************************************************************************************!*\
  !*** ./src/app/modules/anime/components/modals/mt-media-detail-modal/mt-media-detail-modal.component.ts ***!
  \**********************************************************************************************************/
      /*! exports provided: MtMediaDetailModalComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MtMediaDetailModalComponent',
          function() {
            return MtMediaDetailModalComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material */ './node_modules/@angular/material/esm5/material.es5.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };
        var __param =
          (undefined && undefined.__param) ||
          function(paramIndex, decorator) {
            return function(target, key) {
              decorator(target, key, paramIndex);
            };
          };

        var MtMediaDetailModalComponent = /** @class */ (function() {
          function MtMediaDetailModalComponent(dialogRef, router, data) {
            this.dialogRef = dialogRef;
            this.router = router;
            this.data = data;
            this.media = data.media;
          }
          MtMediaDetailModalComponent.prototype.dismiss = function() {
            this.dialogRef.close();
          };
          MtMediaDetailModalComponent.prototype.goToDetail = function() {
            this.router.navigate(['anime-detail/', this.media.id]);
            this.dismiss();
          };
          MtMediaDetailModalComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-media-detail-modal',
                template: __webpack_require__(
                  /*! ./mt-media-detail-modal.component.html */ './src/app/modules/anime/components/modals/mt-media-detail-modal/mt-media-detail-modal.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./mt-media-detail-modal.component.scss */ './src/app/modules/anime/components/modals/mt-media-detail-modal/mt-media-detail-modal.component.scss'
                  )
                ]
              }),
              __param(
                2,
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Inject'])(
                  _angular_material__WEBPACK_IMPORTED_MODULE_1__[
                    'MAT_DIALOG_DATA'
                  ]
                )
              ),
              __metadata('design:paramtypes', [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatDialogRef'],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router'],
                Object
              ])
            ],
            MtMediaDetailModalComponent
          );
          return MtMediaDetailModalComponent;
        })();

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-anime-info/mt-anime-info.component.html':
      /*!*************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-anime-info/mt-anime-info.component.html ***!
  \*************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div *ngIf="anime" [class.general-info-only]="generalInfoOnly">\n  <div [class.row]="showAsColumns">\n    <!-- left column -->\n    <div class="column left">\n      <img [src]="anime.coverImage?.large" class="cover" />\n\n      <div *ngIf="anime.description">\n        <h4 class="no-margin-top margin-bottom-xxs">{{ \'media.description\' | translate }}:</h4>\n\n        <div [innerHTML]="anime.description"></div>\n      </div>\n    </div>\n\n    <!-- right column -->\n    <div class="column right">\n      <p *ngIf="!generalInfoOnly && anime.format" class="property-value-pair flex-box">\n        <strong class="property">{{ \'media.format\' | translate }}:</strong>\n\n        <span class="value">\n          {{ \'media.formatValues.\' + anime.format | translate }}\n        </span>\n      </p>\n\n      <p *ngIf="!generalInfoOnly && anime.episodes" class="property-value-pair flex-box">\n        <strong class="property">{{ \'media.episodes\' | translate }}:</strong>\n\n        <span class="value">\n          {{ anime.episodes }}\n        </span>\n      </p>\n\n      <p *ngIf="!generalInfoOnly && anime.duration" class="property-value-pair flex-box">\n        <strong class="property">{{ \'media.duration\' | translate }}:</strong>\n\n        <span class="value">\n          {{ getFormattedMediaDuration(anime) }}\n        </span>\n      </p>\n\n      <p *ngIf="!generalInfoOnly && anime.startDate.year" class="property-value-pair flex-box">\n        <strong class="property">{{ \'media.year\' | translate }}:</strong>\n\n        <span class="value">\n          {{ anime.startDate.year }}\n        </span>\n      </p>\n\n      <p *ngIf="!generalInfoOnly && anime.format?.length" class="property-value-pair flex-box">\n        <strong class="property">{{ \'media.format\' | translate }}:</strong>\n\n        <span class="value">\n          {{ \'media.formatValues.\' + anime.format | translate }}\n        </span>\n      </p>\n\n      <p *ngIf="anime.status?.length" class="property-value-pair flex-box">\n        <strong class="property">{{ \'media.status\' | translate }}:</strong>\n\n        <span class="value">\n          {{ \'media.statusValues.\' + anime.status | translate }}\n        </span>\n      </p>\n\n      <p *ngIf="anime.studios?.nodes?.length" class="property-value-pair flex-box">\n        <strong class="property">{{ \'media.studio\' | translate }}:</strong>\n\n        <span class="value">\n          {{ anime.studios.nodes[0].name }}\n        </span>\n      </p>\n\n      <p *ngIf="!generalInfoOnly && anime.averageScore" class="property-value-pair flex-box">\n        <strong class="property">{{ \'media.score\' | translate }}:</strong>\n\n        <span class="value"> {{ anime.averageScore / 10 }}/10 </span>\n      </p>\n    </div>\n  </div>\n\n  <!-- below columns -->\n  <p *ngIf="!generalInfoOnly && anime.genres?.length" class="property-value-pair flex-box no-margin-bottom">\n    <strong class="property">{{ \'media.genres\' | translate }}:</strong>\n\n    <span class="value">\n      <span *ngFor="let genre of anime.genres">\n        <mat-chip class="rounded">{{ genre }}</mat-chip>\n      </span>\n    </span>\n  </p>\n\n  <p *ngIf="anime.tags?.length" class="property-value-pair flex-box no-margin-bottom">\n    <strong class="property">{{ \'media.tags\' | translate }}:</strong>\n\n    <span class="value">\n      <span *ngFor="let tag of anime.tags">\n        <span *ngIf="!tag.isMediaSpoiler">\n          <mat-chip [title]="tag.description">{{ tag.name }}</mat-chip>\n        </span>\n      </span>\n    </span>\n  </p>\n\n  <!-- float fix -->\n  <div></div>\n</div>\n';

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-anime-info/mt-anime-info.component.scss':
      /*!*************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-anime-info/mt-anime-info.component.scss ***!
  \*************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\nimg.cover {\n  width: 160px;\n  max-width: 33vw;\n  margin-right: 12px;\n  float: left; }\n.general-info-only .property-value-pair .property {\n  min-width: 64px !important; }\n@media (min-width: 1024px) {\n  .row {\n    display: flex;\n    align-items: flex-start; }\n    .row .column {\n      display: inline-block; }\n      .row .column.left {\n        width: calc(100% - 192px);\n        padding-right: 16px;\n        border-right: 1px solid lightgray; }\n      .row .column.right {\n        width: 192px;\n        padding-left: 16px; }\n        .row .column.right .property-value-pair:first-child {\n          margin-top: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbmltZS9jb21wb25lbnRzL210LWFuaW1lLWluZm8vWjpcXFR4dXNcXFByb2plY3RzXFx3ZWJcXHVub2ZmaWNpYWwtbmc1LWFuaWxpc3QtY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FuaW1lL2NvbXBvbmVudHMvbXQtYW5pbWUtaW5mby9aOlxcVHh1c1xcUHJvamVjdHNcXHdlYlxcdW5vZmZpY2lhbC1uZzUtYW5pbGlzdC1jbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGFuaW1lXFxjb21wb25lbnRzXFxtdC1hbmltZS1pbmZvXFxtdC1hbmltZS1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQUE7QUFZQSxlQUFBO0FBUUEsaUJBQUE7QUFTQSxhQUFBO0FBSUEsV0FBQTtBQUlBLFlBQUE7QUFPQSxhQUFBO0FDdENBO0VBQ0UsWUFMNEI7RUFNNUIsZUFMb0I7RUFNcEIsa0JBTDJDO0VBTTNDLFdBQVcsRUFBQTtBQUdiO0VBR00sMEJBQWlDLEVBQUE7QUFLdkM7RUFDRTtJQUNFLGFBQWE7SUFDYix1QkFBdUIsRUFBQTtJQUZ6QjtNQU9JLHFCQUFxQixFQUFBO01BUHpCO1FBVU0seUJBQTBDO1FBQzFDLG1CRDdCUztRQzhCVCxpQ0FBaUMsRUFBQTtNQVp2QztRQWdCTSxZQVZ3QjtRQVd4QixrQkRuQ1MsRUFBQTtRQ2tCZjtVQXFCVSxhQUFhLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW5pbWUvY29tcG9uZW50cy9tdC1hbmltZS1pbmZvL210LWFuaW1lLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzcGFjaW5nICovXG4kc3BhY2luZy14eHh4czogMnB4O1xuJHNwYWNpbmcteHh4czogNHB4O1xuJHNwYWNpbmcteHhzOiA4cHg7XG4kc3BhY2luZy14czogMTZweDtcbiRzcGFjaW5nLXM6IDI0cHg7XG4kc3BhY2luZy1tOiAzMnB4O1xuJHNwYWNpbmctbDogNDhweDtcbiRzcGFjaW5nLXhsOiA2NHB4O1xuJHNwYWNpbmcteHhsOiA5NnB4O1xuJHNwYWNpbmcteHh4bDogMTI4cHg7XG5cbi8qIGZvbnQgc2l6ZXMgKi9cbiRmb250LXNpemUteHM6IDEycHg7XG4kZm9udC1zaXplLXM6IDE0cHg7XG4kZm9udC1zaXplLW06IDE2cHg7XG4kZm9udC1zaXplLWw6IDIwcHg7XG4kZm9udC1zaXplLXhsOiAyNHB4O1xuJGZvbnQtc2l6ZS14eGw6IDI4cHg7XG5cbi8qIGRldmljZSBzaXplcyAqL1xuJHNjcmVlbi14eHhzOiAzMjBweDtcbiRzY3JlZW4teHhzOiA0ODBweDtcbiRzY3JlZW4teHM6IDU3NnB4O1xuJHNjcmVlbi1zOiA3NjhweDtcbiRzY3JlZW4tbTogMTAyNHB4O1xuJHNjcmVlbi1sOiAxMzYwcHg7XG4kc2NyZWVuLXhsOiAxOTIwcHg7XG5cbi8qIG1hdGVyaWFsICovXG4kbWF0LXRvb2xiYXItaGVpZ2h0OiA2NHB4O1xuJG1hdC1zcGlubmVyLXNpemU6IDEyOHB4O1xuXG4vKiBtb2RhbHMgKi9cbiRtb2RhbC1oZWFkZXItaGVpZ2h0OiA3MHB4O1xuJG1vZGFsLWZvb3Rlci1oZWlnaHQ6IDg0cHg7XG5cbi8qIGdlbmVyaWMgKi9cbiRwYWdlLXBhZGRpbmc6ICRzcGFjaW5nLW07XG4kY2FyZC1wYWRkaW5nOiAkc3BhY2luZy1zO1xuJGV4cGFuc2lvbi1wYW5lbC1wYWRkaW5nOiAkc3BhY2luZy1zO1xuJG1heC1pbnB1dC1zaXplOiA2NDBweDtcbiRzZXBhcmF0b3ItdGhpY2tuZXNzOiAxcHg7XG5cbi8qIHNwZWNpZmljICovXG4kZm9vdGVyLWhlaWdodDogMTAzcHg7XG4iLCJAaW1wb3J0ICdzcmMvYXBwL3N0eWxlcy92YXJpYWJsZXMnO1xuXG4kY292ZXItd2lkdGg6ICRzY3JlZW4teHh4cyAvIDI7XG4kbWF4LWNvdmVyLXdpZHRoOiAzM3Z3O1xuJGNvbnRlbnQtcGFkZGluZzogJHNwYWNpbmcteHMgLSAkc3BhY2luZy14eHhzO1xuXG5pbWcuY292ZXIge1xuICB3aWR0aDogJGNvdmVyLXdpZHRoO1xuICBtYXgtd2lkdGg6ICRtYXgtY292ZXItd2lkdGg7XG4gIG1hcmdpbi1yaWdodDogJGNvbnRlbnQtcGFkZGluZztcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5nZW5lcmFsLWluZm8tb25seSB7XG4gIC5wcm9wZXJ0eS12YWx1ZS1wYWlyIHtcbiAgICAucHJvcGVydHkge1xuICAgICAgbWluLXdpZHRoOiAkc3BhY2luZy14bCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1tKSB7XG4gIC5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICAuY29sdW1uIHtcbiAgICAgICRjb2x1bW4tcGFkZGluZzogJHNwYWNpbmcteHM7XG4gICAgICAkcmlnaHQtY29sdW1uLXdpZHRoOiAxOTJweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgJi5sZWZ0IHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtICN7JHJpZ2h0LWNvbHVtbi13aWR0aH0pO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAkY29sdW1uLXBhZGRpbmc7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgIH1cblxuICAgICAgJi5yaWdodCB7XG4gICAgICAgIHdpZHRoOiAkcmlnaHQtY29sdW1uLXdpZHRoO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6ICRjb2x1bW4tcGFkZGluZztcblxuICAgICAgICAucHJvcGVydHktdmFsdWUtcGFpciB7XG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */';

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-anime-info/mt-anime-info.component.ts':
      /*!***********************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-anime-info/mt-anime-info.component.ts ***!
  \***********************************************************************************/
      /*! exports provided: MtAnimeInfoComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MtAnimeInfoComponent',
          function() {
            return MtAnimeInfoComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_types_anilist_media_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../shared/types/anilist/media.types */ './src/app/modules/shared/types/anilist/media.types.ts'
        );
        /* harmony import */ var _domain_media_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../domain/media.domain */ './src/app/modules/anime/domain/media.domain.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var MtAnimeInfoComponent = /** @class */ (function() {
          function MtAnimeInfoComponent() {}
          MtAnimeInfoComponent.prototype.getFormattedMediaDuration = function(
            media
          ) {
            return Object(
              _domain_media_domain__WEBPACK_IMPORTED_MODULE_2__[
                'getFormattedMediaDuration'
              ]
            )(media);
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata(
                'design:type',
                _shared_types_anilist_media_types__WEBPACK_IMPORTED_MODULE_1__[
                  'Anime'
                ]
              )
            ],
            MtAnimeInfoComponent.prototype,
            'anime',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Boolean)
            ],
            MtAnimeInfoComponent.prototype,
            'showAsColumns',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Boolean)
            ],
            MtAnimeInfoComponent.prototype,
            'generalInfoOnly',
            void 0
          );
          MtAnimeInfoComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-anime-info',
                template: __webpack_require__(
                  /*! ./mt-anime-info.component.html */ './src/app/modules/anime/components/mt-anime-info/mt-anime-info.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./mt-anime-info.component.scss */ './src/app/modules/anime/components/mt-anime-info/mt-anime-info.component.scss'
                  )
                ]
              })
            ],
            MtAnimeInfoComponent
          );
          return MtAnimeInfoComponent;
        })();

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-cover-media/mt-cover-media.component.html':
      /*!***************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-cover-media/mt-cover-media.component.html ***!
  \***************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div *ngIf="media" (click)="doOpenDetailModal()" class="clickable">\n  <div [style.background-image]="\'url(\' + media.coverImage.medium + \')\'" class="cover">\n    <div class="backdrop">\n      <div class="full-width">\n        <div *ngIf="media.title">\n          {{ media.title.romaji }}\n        </div>\n\n        <div *ngIf="media.averageScore">({{ media.averageScore / 10 }})</div>\n      </div>\n    </div>\n  </div>\n</div>\n';

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-cover-media/mt-cover-media.component.scss':
      /*!***************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-cover-media/mt-cover-media.component.scss ***!
  \***************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\n.cover {\n  width: 100px;\n  height: 138px;\n  background-position: center center;\n  background-size: cover; }\n.cover:hover .backdrop {\n    opacity: 1; }\n.cover:not(:hover) .backdrop {\n    opacity: 0; }\n.cover .backdrop {\n    font-size: 12px;\n    padding: 4px;\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n    transition: 0.2s;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    pointer-events: none;\n    background: rgba(0, 0, 0, 0.5);\n    color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbmltZS9jb21wb25lbnRzL210LWNvdmVyLW1lZGlhL1o6XFxUeHVzXFxQcm9qZWN0c1xcd2ViXFx1bm9mZmljaWFsLW5nNS1hbmlsaXN0LWNsaWVudC9zcmNcXGFwcFxcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hbmltZS9jb21wb25lbnRzL210LWNvdmVyLW1lZGlhL1o6XFxUeHVzXFxQcm9qZWN0c1xcd2ViXFx1bm9mZmljaWFsLW5nNS1hbmlsaXN0LWNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcYW5pbWVcXGNvbXBvbmVudHNcXG10LWNvdmVyLW1lZGlhXFxtdC1jb3Zlci1tZWRpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFBO0FBWUEsZUFBQTtBQVFBLGlCQUFBO0FBU0EsYUFBQTtBQUlBLFdBQUE7QUFJQSxZQUFBO0FBT0EsYUFBQTtBQzFDQTtFQUdFLFlBRmE7RUFHYixhQUZjO0VBR2Qsa0NBQWtDO0VBQ2xDLHNCQUFzQixFQUFBO0FBTnhCO0lBVU0sVUFBVSxFQUFBO0FBVmhCO0lBZU0sVUFBVSxFQUFBO0FBZmhCO0lBb0JJLGVEVGU7SUNVZixZRHJCYztJQ3NCZCxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFFaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBRXBCLDhCQUFzQjtJQUN0QixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FuaW1lL2NvbXBvbmVudHMvbXQtY292ZXItbWVkaWEvbXQtY292ZXItbWVkaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzcGFjaW5nICovXG4kc3BhY2luZy14eHh4czogMnB4O1xuJHNwYWNpbmcteHh4czogNHB4O1xuJHNwYWNpbmcteHhzOiA4cHg7XG4kc3BhY2luZy14czogMTZweDtcbiRzcGFjaW5nLXM6IDI0cHg7XG4kc3BhY2luZy1tOiAzMnB4O1xuJHNwYWNpbmctbDogNDhweDtcbiRzcGFjaW5nLXhsOiA2NHB4O1xuJHNwYWNpbmcteHhsOiA5NnB4O1xuJHNwYWNpbmcteHh4bDogMTI4cHg7XG5cbi8qIGZvbnQgc2l6ZXMgKi9cbiRmb250LXNpemUteHM6IDEycHg7XG4kZm9udC1zaXplLXM6IDE0cHg7XG4kZm9udC1zaXplLW06IDE2cHg7XG4kZm9udC1zaXplLWw6IDIwcHg7XG4kZm9udC1zaXplLXhsOiAyNHB4O1xuJGZvbnQtc2l6ZS14eGw6IDI4cHg7XG5cbi8qIGRldmljZSBzaXplcyAqL1xuJHNjcmVlbi14eHhzOiAzMjBweDtcbiRzY3JlZW4teHhzOiA0ODBweDtcbiRzY3JlZW4teHM6IDU3NnB4O1xuJHNjcmVlbi1zOiA3NjhweDtcbiRzY3JlZW4tbTogMTAyNHB4O1xuJHNjcmVlbi1sOiAxMzYwcHg7XG4kc2NyZWVuLXhsOiAxOTIwcHg7XG5cbi8qIG1hdGVyaWFsICovXG4kbWF0LXRvb2xiYXItaGVpZ2h0OiA2NHB4O1xuJG1hdC1zcGlubmVyLXNpemU6IDEyOHB4O1xuXG4vKiBtb2RhbHMgKi9cbiRtb2RhbC1oZWFkZXItaGVpZ2h0OiA3MHB4O1xuJG1vZGFsLWZvb3Rlci1oZWlnaHQ6IDg0cHg7XG5cbi8qIGdlbmVyaWMgKi9cbiRwYWdlLXBhZGRpbmc6ICRzcGFjaW5nLW07XG4kY2FyZC1wYWRkaW5nOiAkc3BhY2luZy1zO1xuJGV4cGFuc2lvbi1wYW5lbC1wYWRkaW5nOiAkc3BhY2luZy1zO1xuJG1heC1pbnB1dC1zaXplOiA2NDBweDtcbiRzZXBhcmF0b3ItdGhpY2tuZXNzOiAxcHg7XG5cbi8qIHNwZWNpZmljICovXG4kZm9vdGVyLWhlaWdodDogMTAzcHg7XG4iLCJAaW1wb3J0ICdzcmMvYXBwL3N0eWxlcy92YXJpYWJsZXMnO1xuXG4uY292ZXIge1xuICAkd2lkdGg6IDEwMHB4O1xuICAkaGVpZ2h0OiAxMzhweDtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICY6aG92ZXIge1xuICAgIC5iYWNrZHJvcCB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICAmOm5vdCg6aG92ZXIpIHtcbiAgICAuYmFja2Ryb3Age1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cblxuICAuYmFja2Ryb3Age1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcbiAgICBwYWRkaW5nOiAkc3BhY2luZy14eHhzO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgYmFja2dyb3VuZDogcmdiYShibGFjaywgMC41KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cbiJdfQ== */';

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-cover-media/mt-cover-media.component.ts':
      /*!*************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-cover-media/mt-cover-media.component.ts ***!
  \*************************************************************************************/
      /*! exports provided: MtCoverMediaComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MtCoverMediaComponent',
          function() {
            return MtCoverMediaComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material */ './node_modules/@angular/material/esm5/material.es5.js'
        );
        /* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../app.constants */ './src/app/app.constants.ts'
        );
        /* harmony import */ var _modals_mt_media_detail_modal_mt_media_detail_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../modals/mt-media-detail-modal/mt-media-detail-modal.component */ './src/app/modules/anime/components/modals/mt-media-detail-modal/mt-media-detail-modal.component.ts'
        );
        var __assign =
          (undefined && undefined.__assign) ||
          function() {
            __assign =
              Object.assign ||
              function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                  s = arguments[i];
                  for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
              };
            return __assign.apply(this, arguments);
          };
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var MtCoverMediaComponent = /** @class */ (function() {
          function MtCoverMediaComponent(dialog) {
            this.dialog = dialog;
          }
          MtCoverMediaComponent.prototype.ngOnInit = function() {
            if (!this.media && this.listEntry) {
              this.media = this.listEntry.media;
              delete this.listEntry.media;
              this.media.mediaListEntry = this.listEntry;
            }
          };
          MtCoverMediaComponent.prototype.doOpenDetailModal = function() {
            this.dialog.open(
              _modals_mt_media_detail_modal_mt_media_detail_modal_component__WEBPACK_IMPORTED_MODULE_3__[
                'MtMediaDetailModalComponent'
              ],
              __assign(
                {},
                _app_constants__WEBPACK_IMPORTED_MODULE_2__[
                  'defaultModalOptions'
                ],
                {
                  maxWidth: '800px',
                  data: {
                    media: this.media
                  }
                }
              )
            );
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object)
            ],
            MtCoverMediaComponent.prototype,
            'listEntry',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object)
            ],
            MtCoverMediaComponent.prototype,
            'media',
            void 0
          );
          MtCoverMediaComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-cover-media',
                template: __webpack_require__(
                  /*! ./mt-cover-media.component.html */ './src/app/modules/anime/components/mt-cover-media/mt-cover-media.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./mt-cover-media.component.scss */ './src/app/modules/anime/components/mt-cover-media/mt-cover-media.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatDialog']
              ])
            ],
            MtCoverMediaComponent
          );
          return MtCoverMediaComponent;
        })();

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-genres-overview/mt-genres-overview.component.html':
      /*!***********************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-genres-overview/mt-genres-overview.component.html ***!
  \***********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<h3>\n  {{ \'anime.userList.genresOverview\' | translate }}\n</h3>\n\n<mat-grid-list *ngIf="(genreStatsList?.length | sort: \'amount\')" [cols]="getColumnCount()" rowHeight="32px">\n  <mat-grid-tile\n    *ngFor="let genreStats of genreStatsList"\n    [matTooltip]="genreStats.amount + \' \' + (\'anime.userList.entries\' | translate)"\n    matTooltipPosition="above"\n  >\n    {{ genreStats.genre }} ({{ genreStats.percentage }}%)\n  </mat-grid-tile>\n</mat-grid-list>\n';

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-genres-overview/mt-genres-overview.component.scss':
      /*!***********************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-genres-overview/mt-genres-overview.component.scss ***!
  \***********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          'mat-grid-tile {\n  cursor: default; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbmltZS9jb21wb25lbnRzL210LWdlbnJlcy1vdmVydmlldy9aOlxcVHh1c1xcUHJvamVjdHNcXHdlYlxcdW5vZmZpY2lhbC1uZzUtYW5pbGlzdC1jbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGFuaW1lXFxjb21wb25lbnRzXFxtdC1nZW5yZXMtb3ZlcnZpZXdcXG10LWdlbnJlcy1vdmVydmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW5pbWUvY29tcG9uZW50cy9tdC1nZW5yZXMtb3ZlcnZpZXcvbXQtZ2VucmVzLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtdGlsZSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbiJdfQ== */';

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-genres-overview/mt-genres-overview.component.ts':
      /*!*********************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-genres-overview/mt-genres-overview.component.ts ***!
  \*********************************************************************************************/
      /*! exports provided: MtGenresOverviewComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MtGenresOverviewComponent',
          function() {
            return MtGenresOverviewComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var MtGenresOverviewComponent = /** @class */ (function() {
          function MtGenresOverviewComponent() {
            this.maxColumnCount = 5;
            this.minColumnWidth = 160;
          }
          MtGenresOverviewComponent.prototype.ngOnInit = function() {
            this.calculateStatistics();
          };
          MtGenresOverviewComponent.prototype.calculateStatistics = function() {
            var totalCount = 0;
            this.genreStatsList.forEach(function(genreStats) {
              totalCount += genreStats.amount;
            });
            this.genreStatsList.forEach(function(genreStats) {
              genreStats.percentage = Math.round(
                (genreStats.amount * 100) / totalCount
              );
            });
          };
          MtGenresOverviewComponent.prototype.getColumnCount = function() {
            var columnCount = window.screen.width / this.minColumnWidth;
            return Math.floor(
              columnCount < this.maxColumnCount
                ? columnCount
                : this.maxColumnCount
            );
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Array)
            ],
            MtGenresOverviewComponent.prototype,
            'genreStatsList',
            void 0
          );
          MtGenresOverviewComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-genres-overview',
                template: __webpack_require__(
                  /*! ./mt-genres-overview.component.html */ './src/app/modules/anime/components/mt-genres-overview/mt-genres-overview.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./mt-genres-overview.component.scss */ './src/app/modules/anime/components/mt-genres-overview/mt-genres-overview.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [])
            ],
            MtGenresOverviewComponent
          );
          return MtGenresOverviewComponent;
        })();

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-list-related-media/mt-list-related-media.component.html':
      /*!*****************************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-list-related-media/mt-list-related-media.component.html ***!
  \*****************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<mat-card class="composite compact">\n  <div class="header">\n    <h4 class="no-margin">\n      Media related to what you have watched\n    </h4>\n  </div>\n\n  <mat-divider></mat-divider>\n\n  <div class="content">\n    <mat-spinner *ngIf="!ready" mode="indeterminate" class="margin-auto"></mat-spinner>\n\n    <div *ngIf="mediaList?.length" class="cover-media-grid">\n      <mt-cover-media *ngFor="let media of mediaList" [media]="media"></mt-cover-media>\n    </div>\n\n    <mat-card *ngIf="error" class="error">\n      <h4>\n        <fa-icon name="exclamation-circle" class="margin-right-xxs"></fa-icon>\n        {{ error }}\n      </h4>\n    </mat-card>\n  </div>\n</mat-card>\n';

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-list-related-media/mt-list-related-media.component.scss':
      /*!*****************************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-list-related-media/mt-list-related-media.component.scss ***!
  \*****************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW5pbWUvY29tcG9uZW50cy9tdC1saXN0LXJlbGF0ZWQtbWVkaWEvbXQtbGlzdC1yZWxhdGVkLW1lZGlhLmNvbXBvbmVudC5zY3NzIn0= */';

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-list-related-media/mt-list-related-media.component.ts':
      /*!***************************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-list-related-media/mt-list-related-media.component.ts ***!
  \***************************************************************************************************/
      /*! exports provided: MtListRelatedMediaComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MtListRelatedMediaComponent',
          function() {
            return MtListRelatedMediaComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_store_auth_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/store/auth.store */ './src/app/modules/shared/store/auth.store.ts'
        );
        /* harmony import */ var _services_anime_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../services/anime.service */ './src/app/modules/anime/services/anime.service.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var MtListRelatedMediaComponent = /** @class */ (function() {
          function MtListRelatedMediaComponent(animeService, authStore) {
            var _this = this;
            this.animeService = animeService;
            this.authStore = authStore;
            this.maxEntries = 20;
            this.animeService
              .getRelatedAnimeMedia(this.authStore.getUser())
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(
                  function(relatedMediaList) {
                    _this.mediaList = relatedMediaList;
                  }
                ),
                Object(
                  rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError']
                )(function(error) {
                  _this.error = error;
                  _this.ready = true;
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['of'])();
                })
              )
              .subscribe();
          }
          MtListRelatedMediaComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-list-related-media',
                template: __webpack_require__(
                  /*! ./mt-list-related-media.component.html */ './src/app/modules/anime/components/mt-list-related-media/mt-list-related-media.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./mt-list-related-media.component.scss */ './src/app/modules/anime/components/mt-list-related-media/mt-list-related-media.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _services_anime_service__WEBPACK_IMPORTED_MODULE_4__[
                  'AnimeService'
                ],
                _shared_store_auth_store__WEBPACK_IMPORTED_MODULE_3__[
                  'AuthStore'
                ]
              ])
            ],
            MtListRelatedMediaComponent
          );
          return MtListRelatedMediaComponent;
        })();

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-media-actions/mt-media-actions.component.html':
      /*!*******************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-media-actions/mt-media-actions.component.html ***!
  \*******************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<fa-icon name="bars" class="menu-toggle clickable" [matMenuTriggerFor]="entryMenu"></fa-icon>\n\n<mat-menu #entryMenu="matMenu">\n  <mt-menu-action (onPress)="saveToList()" disabled="{{ !user }}" icon="{{ isUpdateAvailable() ? \'pen\' : \'plus\' }}">\n    {{ (isUpdateAvailable() ? \'anime.userList.updateEntry\' : \'anime.userList.addToList\') | translate }}\n  </mt-menu-action>\n\n  <div *ngIf="isUpdateAvailable()">\n    <mt-menu-action (onPress)="toggleFavourite()" icon="star">\n      {{ \'anime.userList.toggleFavourite\' | translate }}\n    </mt-menu-action>\n  </div>\n\n  <div *ngIf="isUpdateAvailable()">\n    <mt-menu-action (onPress)="deleteEntry()" icon="trash">\n      {{ \'anime.userList.deleteFromList\' | translate }}\n    </mt-menu-action>\n  </div>\n\n  <div *ngIf="media && !fromModal">\n    <mt-menu-action (onPress)="showDetail()" icon="id-card">\n      {{ \'media.additionalInfo\' | translate }}\n    </mt-menu-action>\n  </div>\n\n  <mt-menu-action (onPress)="viewOnAniList()" icon="external-link-alt">\n    {{ \'media.viewOnAniList\' | translate }}\n  </mt-menu-action>\n</mat-menu>\n';

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-media-actions/mt-media-actions.component.scss':
      /*!*******************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-media-actions/mt-media-actions.component.scss ***!
  \*******************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\n:host {\n  display: flex;\n  align-items: center;\n  overflow: visible; }\n.action-icon {\n  min-width: 24px;\n  display: inline-block;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbmltZS9jb21wb25lbnRzL210LW1lZGlhLWFjdGlvbnMvWjpcXFR4dXNcXFByb2plY3RzXFx3ZWJcXHVub2ZmaWNpYWwtbmc1LWFuaWxpc3QtY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FuaW1lL2NvbXBvbmVudHMvbXQtbWVkaWEtYWN0aW9ucy9aOlxcVHh1c1xcUHJvamVjdHNcXHdlYlxcdW5vZmZpY2lhbC1uZzUtYW5pbGlzdC1jbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGFuaW1lXFxjb21wb25lbnRzXFxtdC1tZWRpYS1hY3Rpb25zXFxtdC1tZWRpYS1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQUE7QUFZQSxlQUFBO0FBUUEsaUJBQUE7QUFTQSxhQUFBO0FBSUEsV0FBQTtBQUlBLFlBQUE7QUFPQSxhQUFBO0FDMUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTtBQUduQjtFQUNFLGVESmM7RUNLZCxxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FuaW1lL2NvbXBvbmVudHMvbXQtbWVkaWEtYWN0aW9ucy9tdC1tZWRpYS1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3BhY2luZyAqL1xuJHNwYWNpbmcteHh4eHM6IDJweDtcbiRzcGFjaW5nLXh4eHM6IDRweDtcbiRzcGFjaW5nLXh4czogOHB4O1xuJHNwYWNpbmcteHM6IDE2cHg7XG4kc3BhY2luZy1zOiAyNHB4O1xuJHNwYWNpbmctbTogMzJweDtcbiRzcGFjaW5nLWw6IDQ4cHg7XG4kc3BhY2luZy14bDogNjRweDtcbiRzcGFjaW5nLXh4bDogOTZweDtcbiRzcGFjaW5nLXh4eGw6IDEyOHB4O1xuXG4vKiBmb250IHNpemVzICovXG4kZm9udC1zaXplLXhzOiAxMnB4O1xuJGZvbnQtc2l6ZS1zOiAxNHB4O1xuJGZvbnQtc2l6ZS1tOiAxNnB4O1xuJGZvbnQtc2l6ZS1sOiAyMHB4O1xuJGZvbnQtc2l6ZS14bDogMjRweDtcbiRmb250LXNpemUteHhsOiAyOHB4O1xuXG4vKiBkZXZpY2Ugc2l6ZXMgKi9cbiRzY3JlZW4teHh4czogMzIwcHg7XG4kc2NyZWVuLXh4czogNDgwcHg7XG4kc2NyZWVuLXhzOiA1NzZweDtcbiRzY3JlZW4tczogNzY4cHg7XG4kc2NyZWVuLW06IDEwMjRweDtcbiRzY3JlZW4tbDogMTM2MHB4O1xuJHNjcmVlbi14bDogMTkyMHB4O1xuXG4vKiBtYXRlcmlhbCAqL1xuJG1hdC10b29sYmFyLWhlaWdodDogNjRweDtcbiRtYXQtc3Bpbm5lci1zaXplOiAxMjhweDtcblxuLyogbW9kYWxzICovXG4kbW9kYWwtaGVhZGVyLWhlaWdodDogNzBweDtcbiRtb2RhbC1mb290ZXItaGVpZ2h0OiA4NHB4O1xuXG4vKiBnZW5lcmljICovXG4kcGFnZS1wYWRkaW5nOiAkc3BhY2luZy1tO1xuJGNhcmQtcGFkZGluZzogJHNwYWNpbmctcztcbiRleHBhbnNpb24tcGFuZWwtcGFkZGluZzogJHNwYWNpbmctcztcbiRtYXgtaW5wdXQtc2l6ZTogNjQwcHg7XG4kc2VwYXJhdG9yLXRoaWNrbmVzczogMXB4O1xuXG4vKiBzcGVjaWZpYyAqL1xuJGZvb3Rlci1oZWlnaHQ6IDEwM3B4O1xuIiwiQGltcG9ydCAnc3JjL2FwcC9zdHlsZXMvdmFyaWFibGVzJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLmFjdGlvbi1pY29uIHtcbiAgbWluLXdpZHRoOiAkc3BhY2luZy1zO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */';

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-media-actions/mt-media-actions.component.ts':
      /*!*****************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-media-actions/mt-media-actions.component.ts ***!
  \*****************************************************************************************/
      /*! exports provided: MtMediaActionsComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MtMediaActionsComponent',
          function() {
            return MtMediaActionsComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material */ './node_modules/@angular/material/esm5/material.es5.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../app.constants */ './src/app/app.constants.ts'
        );
        /* harmony import */ var _services_anime_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../services/anime.service */ './src/app/modules/anime/services/anime.service.ts'
        );
        /* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/services/auth.service */ './src/app/modules/shared/services/auth.service.ts'
        );
        /* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/services/toast.service */ './src/app/modules/shared/services/toast.service.ts'
        );
        /* harmony import */ var _shared_store_auth_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/store/auth.store */ './src/app/modules/shared/store/auth.store.ts'
        );
        /* harmony import */ var _shared_components_with_observable_on_destroy_with_observable_on_destroy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/components/with-observable-on-destroy/with-observable-on-destroy.component */ './src/app/modules/shared/components/with-observable-on-destroy/with-observable-on-destroy.component.ts'
        );
        /* harmony import */ var _modals_mt_list_entry_form_modal_mt_list_entry_form_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component */ './src/app/modules/anime/components/modals/mt-list-entry-form-modal/mt-list-entry-form-modal.component.ts'
        );
        /* harmony import */ var _modals_mt_media_detail_modal_mt_media_detail_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../modals/mt-media-detail-modal/mt-media-detail-modal.component */ './src/app/modules/anime/components/modals/mt-media-detail-modal/mt-media-detail-modal.component.ts'
        );
        var __extends =
          (undefined && undefined.__extends) ||
          (function() {
            var extendStatics = function(d, b) {
              extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype =
                b === null
                  ? Object.create(b)
                  : ((__.prototype = b.prototype), new __());
            };
          })();
        var __assign =
          (undefined && undefined.__assign) ||
          function() {
            __assign =
              Object.assign ||
              function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                  s = arguments[i];
                  for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
              };
            return __assign.apply(this, arguments);
          };
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var MtMediaActionsComponent = /** @class */ (function(_super) {
          __extends(MtMediaActionsComponent, _super);
          function MtMediaActionsComponent(
            dialog,
            translateService,
            animeService,
            authService,
            authStore,
            toastService
          ) {
            var _this = _super.call(this) || this;
            _this.dialog = dialog;
            _this.translateService = translateService;
            _this.animeService = animeService;
            _this.authService = authService;
            _this.authStore = authStore;
            _this.toastService = toastService;
            _this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'EventEmitter'
            ]();
            _this.user = _this.authStore.getUser();
            _this.authService.userChange
              .pipe(
                Object(
                  rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['takeUntil']
                )(_this.destroyed$),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['tap'])(
                  function(user) {
                    _this.user = user;
                  }
                )
              )
              .subscribe();
            return _this;
          }
          MtMediaActionsComponent.prototype.ngOnInit = function() {
            if (this.media && this.media.mediaListEntry && !this.listEntry) {
              this.listEntry = this.media.mediaListEntry;
            }
          };
          MtMediaActionsComponent.prototype.saveToList = function() {
            var _this = this;
            this.showFormModal()
              .afterClosed()
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['tap'])(
                  function(result) {
                    if (result) {
                      if (result.savedListEntry) {
                        _this.showSavedListEntryToast(result.savedListEntry);
                      }
                      if (result.deletedListEntry) {
                        _this.showDeletedListEntryToast(
                          result.deletedListEntry
                        );
                      }
                      _this.onUpdate.emit(
                        result.savedListEntry || result.deletedListEntry
                      );
                    }
                  }
                )
              )
              .subscribe();
          };
          MtMediaActionsComponent.prototype.toggleFavourite = function() {
            var _this = this;
            var targetlistEntry = this.getListEntry();
            this.animeService
              .toggleFavouriteAnimeListEntry(targetlistEntry)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['tap'])(
                  function(listEntryId) {
                    var success = listEntryId !== undefined;
                    if (success) {
                      _this.showToggledFavouriteToast(targetlistEntry);
                      _this.onUpdate.emit(targetlistEntry);
                    }
                  }
                )
              )
              .subscribe();
          };
          MtMediaActionsComponent.prototype.deleteEntry = function() {
            var _this = this;
            var targetlistEntry = this.getListEntry();
            this.animeService
              .deleteAnimeListEntry(targetlistEntry)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['tap'])(
                  function(deletedListEntry) {
                    var success = deletedListEntry.deleted === true;
                    if (success) {
                      _this.showDeletedListEntryToast(targetlistEntry);
                      _this.onUpdate.emit(targetlistEntry);
                    }
                  }
                )
              )
              .subscribe();
          };
          MtMediaActionsComponent.prototype.showDetail = function() {
            this.dialog.open(
              _modals_mt_media_detail_modal_mt_media_detail_modal_component__WEBPACK_IMPORTED_MODULE_11__[
                'MtMediaDetailModalComponent'
              ],
              __assign(
                {},
                _app_constants__WEBPACK_IMPORTED_MODULE_4__[
                  'defaultModalOptions'
                ],
                {
                  maxWidth: '800px',
                  data: {
                    media: this.media
                  }
                }
              )
            );
          };
          MtMediaActionsComponent.prototype.viewOnAniList = function() {
            window.open('https://anilist.co/anime/' + this.media.id);
          };
          MtMediaActionsComponent.prototype.isUpdateAvailable = function() {
            return !!this.listEntry && !!this.user;
          };
          MtMediaActionsComponent.prototype.getListEntry = function() {
            var mediaCopy = __assign({}, this.media);
            mediaCopy.mediaListEntry = undefined;
            var listEntryCopy = __assign({}, this.listEntry);
            listEntryCopy.media = mediaCopy;
            return listEntryCopy;
          };
          MtMediaActionsComponent.prototype.showFormModal = function() {
            return this.dialog.open(
              _modals_mt_list_entry_form_modal_mt_list_entry_form_modal_component__WEBPACK_IMPORTED_MODULE_10__[
                'MtListEntryFormModalComponent'
              ],
              __assign(
                {},
                _app_constants__WEBPACK_IMPORTED_MODULE_4__[
                  'defaultModalOptions'
                ],
                {
                  data: {
                    listEntry: this.listEntry,
                    media: this.media
                  }
                }
              )
            );
          };
          MtMediaActionsComponent.prototype.showSavedListEntryToast = function(
            listEntry
          ) {
            this.toastService.showToast(
              this.translateService.instant('listEntry.update.success', {
                mediaTitle: listEntry.media.title.romaji
              })
            );
          };
          MtMediaActionsComponent.prototype.showToggledFavouriteToast = function(
            listEntry
          ) {
            this.toastService.showToast(
              this.translateService.instant(
                'listEntry.favouriteToggle.success',
                { mediaTitle: listEntry.media.title.romaji }
              )
            );
          };
          MtMediaActionsComponent.prototype.showDeletedListEntryToast = function(
            listEntry
          ) {
            this.toastService.showToast(
              this.translateService.instant('listEntry.deletion.success', {
                mediaTitle: listEntry.media.title.romaji
              })
            );
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object)
            ],
            MtMediaActionsComponent.prototype,
            'listEntry',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object)
            ],
            MtMediaActionsComponent.prototype,
            'media',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Boolean)
            ],
            MtMediaActionsComponent.prototype,
            'fromModal',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata(
                'design:type',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']
              )
            ],
            MtMediaActionsComponent.prototype,
            'onUpdate',
            void 0
          );
          MtMediaActionsComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-media-actions',
                template: __webpack_require__(
                  /*! ./mt-media-actions.component.html */ './src/app/modules/anime/components/mt-media-actions/mt-media-actions.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./mt-media-actions.component.scss */ './src/app/modules/anime/components/mt-media-actions/mt-media-actions.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatDialog'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__[
                  'TranslateService'
                ],
                _services_anime_service__WEBPACK_IMPORTED_MODULE_5__[
                  'AnimeService'
                ],
                _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__[
                  'AuthService'
                ],
                _shared_store_auth_store__WEBPACK_IMPORTED_MODULE_8__[
                  'AuthStore'
                ],
                _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_7__[
                  'ToastService'
                ]
              ])
            ],
            MtMediaActionsComponent
          );
          return MtMediaActionsComponent;
        })(
          _shared_components_with_observable_on_destroy_with_observable_on_destroy_component__WEBPACK_IMPORTED_MODULE_9__[
            'WithObservableOnDestroy'
          ]
        );

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-recently-finished-media-by-format/mt-recently-finished-media-by-format.component.html':
      /*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-recently-finished-media-by-format/mt-recently-finished-media-by-format.component.html ***!
  \***********************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div *ngIf="!ready" class="placeholder">\n  <mat-spinner mode="indeterminate"></mat-spinner>\n</div>\n\n<div *ngIf="mediaList?.length" class="cover-media-grid">\n  <mt-cover-media *ngFor="let media of mediaList" [media]="media"></mt-cover-media>\n</div>\n\n<mat-paginator\n  *ngIf="pagination"\n  [showFirstLastButtons]="true"\n  [length]="pagination.total"\n  [pageSize]="pagination.perPage"\n  (page)="changePage($event)"\n  class="basic negative-bottom-margin"\n>\n</mat-paginator>\n\n<mat-card *ngIf="error" class="error">\n  <h4>\n    <fa-icon name="exclamation-circle" class="margin-right-xxs"></fa-icon>\n    {{ error }}\n  </h4>\n</mat-card>\n';

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-recently-finished-media-by-format/mt-recently-finished-media-by-format.component.scss':
      /*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-recently-finished-media-by-format/mt-recently-finished-media-by-format.component.scss ***!
  \***********************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.placeholder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 594px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbmltZS9jb21wb25lbnRzL210LXJlY2VudGx5LWZpbmlzaGVkLW1lZGlhLWJ5LWZvcm1hdC9aOlxcVHh1c1xcUHJvamVjdHNcXHdlYlxcdW5vZmZpY2lhbC1uZzUtYW5pbGlzdC1jbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGFuaW1lXFxjb21wb25lbnRzXFxtdC1yZWNlbnRseS1maW5pc2hlZC1tZWRpYS1ieS1mb3JtYXRcXG10LXJlY2VudGx5LWZpbmlzaGVkLW1lZGlhLWJ5LWZvcm1hdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hbmltZS9jb21wb25lbnRzL210LXJlY2VudGx5LWZpbmlzaGVkLW1lZGlhLWJ5LWZvcm1hdC9tdC1yZWNlbnRseS1maW5pc2hlZC1tZWRpYS1ieS1mb3JtYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxhY2Vob2xkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNTk0cHg7XG59XG4iXX0= */';

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-recently-finished-media-by-format/mt-recently-finished-media-by-format.component.ts':
      /*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-recently-finished-media-by-format/mt-recently-finished-media-by-format.component.ts ***!
  \*********************************************************************************************************************************/
      /*! exports provided: MtRecentlyFinishedMediaByFormatComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MtRecentlyFinishedMediaByFormatComponent',
          function() {
            return MtRecentlyFinishedMediaByFormatComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_store_auth_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/store/auth.store */ './src/app/modules/shared/store/auth.store.ts'
        );
        /* harmony import */ var _services_anime_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../services/anime.service */ './src/app/modules/anime/services/anime.service.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var MtRecentlyFinishedMediaByFormatComponent = /** @class */ (function() {
          function MtRecentlyFinishedMediaByFormatComponent(
            animeService,
            authStore
          ) {
            var _this = this;
            this.animeService = animeService;
            this.authStore = authStore;
            this.maxEntries = 16;
            this.whitelistedIds = [];
            this.animeService
              .getAnimeListMediaIdsByStatus(this.authStore.getUser())
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(
                  function(listMediaIdsByStatus) {
                    _this.whitelistedIds = (
                      listMediaIdsByStatus.CURRENT || []
                    ).concat(listMediaIdsByStatus.PLANNING || []);
                    _this.getRecentlyFinishedAiring();
                  }
                ),
                Object(
                  rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError']
                )(function(error) {
                  return Object(
                    rxjs__WEBPACK_IMPORTED_MODULE_1__['of']
                  )(_this.onError(error));
                })
              )
              .subscribe();
          }
          MtRecentlyFinishedMediaByFormatComponent.prototype.changePage = function(
            pageEvent
          ) {
            this.pagination.pageIndex = pageEvent.pageIndex + 1;
            this.getRecentlyFinishedAiring();
          };
          MtRecentlyFinishedMediaByFormatComponent.prototype.getRecentlyFinishedAiring = function() {
            var _this = this;
            this.animeService
              .getRecentlyFinishedAiringAnime(
                {
                  idIn: this.whitelistedIds,
                  formatIn: this.formatIn,
                  formatNotIn: this.formatNotIn
                },
                {
                  perPage: this.maxEntries,
                  pageIndex: this.pagination && this.pagination.pageIndex
                }
              )
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(
                  function(response) {
                    _this.mediaList = response.media;
                    _this.pagination = response.pageInfo;
                    _this.ready = true;
                  }
                ),
                Object(
                  rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError']
                )(function(error) {
                  return Object(
                    rxjs__WEBPACK_IMPORTED_MODULE_1__['of']
                  )(_this.onError(error));
                })
              )
              .subscribe();
          };
          MtRecentlyFinishedMediaByFormatComponent.prototype.onError = function(
            error
          ) {
            this.error = error;
            this.ready = true;
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Array)
            ],
            MtRecentlyFinishedMediaByFormatComponent.prototype,
            'formatIn',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Array)
            ],
            MtRecentlyFinishedMediaByFormatComponent.prototype,
            'formatNotIn',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', String)
            ],
            MtRecentlyFinishedMediaByFormatComponent.prototype,
            'title',
            void 0
          );
          MtRecentlyFinishedMediaByFormatComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-recently-finished-media-by-format',
                template: __webpack_require__(
                  /*! ./mt-recently-finished-media-by-format.component.html */ './src/app/modules/anime/components/mt-recently-finished-media-by-format/mt-recently-finished-media-by-format.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./mt-recently-finished-media-by-format.component.scss */ './src/app/modules/anime/components/mt-recently-finished-media-by-format/mt-recently-finished-media-by-format.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _services_anime_service__WEBPACK_IMPORTED_MODULE_4__[
                  'AnimeService'
                ],
                _shared_store_auth_store__WEBPACK_IMPORTED_MODULE_3__[
                  'AuthStore'
                ]
              ])
            ],
            MtRecentlyFinishedMediaByFormatComponent
          );
          return MtRecentlyFinishedMediaByFormatComponent;
        })();

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-recently-finished-media/mt-recently-finished-media.component.html':
      /*!***************************************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-recently-finished-media/mt-recently-finished-media.component.html ***!
  \***************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<mat-card class="composite compact">\n  <div class="tab-group">\n    <div class="header">\n      <h4 class="no-margin">\n        {{ \'anime.dashboard.finishedAiring.title\' | translate }}\n      </h4>\n    </div>\n\n    <div\n      *ngFor="let tab of tabs"\n      class="header tab {{ tab === activeTab ? \'active\' : \'clickable\' }}"\n      (click)="activateTab(tab)"\n    >\n      <h4 class="no-margin">\n        {{ tab.label }}\n      </h4>\n    </div>\n  </div>\n\n  <div *ngFor="let tab of tabs" [hidden]="tab !== activeTab" class="content">\n    <mt-recently-finished-media-by-format [formatIn]="tab.data.formatIn" [formatNotIn]="tab.data.formatNotIn">\n    </mt-recently-finished-media-by-format>\n  </div>\n</mat-card>\n';

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-recently-finished-media/mt-recently-finished-media.component.scss':
      /*!***************************************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-recently-finished-media/mt-recently-finished-media.component.scss ***!
  \***************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW5pbWUvY29tcG9uZW50cy9tdC1yZWNlbnRseS1maW5pc2hlZC1tZWRpYS9tdC1yZWNlbnRseS1maW5pc2hlZC1tZWRpYS5jb21wb25lbnQuc2NzcyJ9 */';

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-recently-finished-media/mt-recently-finished-media.component.ts':
      /*!*************************************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-recently-finished-media/mt-recently-finished-media.component.ts ***!
  \*************************************************************************************************************/
      /*! exports provided: MtRecentlyFinishedMediaComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MtRecentlyFinishedMediaComponent',
          function() {
            return MtRecentlyFinishedMediaComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        var __assign =
          (undefined && undefined.__assign) ||
          function() {
            __assign =
              Object.assign ||
              function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                  s = arguments[i];
                  for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
              };
            return __assign.apply(this, arguments);
          };
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var MtRecentlyFinishedMediaComponent = /** @class */ (function() {
          function MtRecentlyFinishedMediaComponent(translateService) {
            var _this = this;
            this.translateService = translateService;
            var tabs = [
              {
                label: 'anime.dashboard.finishedAiring.series',
                data: {
                  formatIn: ['TV']
                }
              },
              {
                label: 'anime.dashboard.finishedAiring.movies',
                data: {
                  formatIn: ['MOVIE']
                }
              },
              {
                label: 'anime.dashboard.finishedAiring.other',
                data: {
                  formatNotIn: ['TV', 'MOVIE']
                }
              }
            ];
            this.translateService
              .get(
                tabs.map(function(tab) {
                  return tab.label;
                })
              )
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(
                  function(translations) {
                    _this.tabs = tabs.map(function(tab) {
                      return __assign({}, tab, {
                        label: translations[tab.label]
                      });
                    });
                    _this.activeTab = _this.tabs[0];
                  }
                )
              )
              .subscribe();
          }
          MtRecentlyFinishedMediaComponent.prototype.activateTab = function(
            tab
          ) {
            this.activeTab = tab;
          };
          MtRecentlyFinishedMediaComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-recently-finished-media',
                template: __webpack_require__(
                  /*! ./mt-recently-finished-media.component.html */ './src/app/modules/anime/components/mt-recently-finished-media/mt-recently-finished-media.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./mt-recently-finished-media.component.scss */ './src/app/modules/anime/components/mt-recently-finished-media/mt-recently-finished-media.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__[
                  'TranslateService'
                ]
              ])
            ],
            MtRecentlyFinishedMediaComponent
          );
          return MtRecentlyFinishedMediaComponent;
        })();

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-recently-updated-list-entries/mt-recently-updated-list-entries.component.html':
      /*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-recently-updated-list-entries/mt-recently-updated-list-entries.component.html ***!
  \***************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<mat-card class="composite compact">\n  <div class="header">\n    <h4 class="no-margin">\n      {{ \'anime.dashboard.recentlyUpdated.title\' | translate }}\n    </h4>\n  </div>\n\n  <mat-divider></mat-divider>\n\n  <div class="content">\n    <div *ngIf="!ready" class="placeholder">\n      <mat-spinner mode="indeterminate"></mat-spinner>\n    </div>\n\n    <div *ngIf="listEntries?.length" class="cover-media-grid">\n      <mt-cover-media *ngFor="let entry of listEntries" [listEntry]="entry"></mt-cover-media>\n    </div>\n\n    <mat-paginator\n      *ngIf="pagination"\n      [showFirstLastButtons]="true"\n      [length]="pagination.total"\n      [pageSize]="pagination.perPage"\n      (page)="changePage($event)"\n      class="basic negative-bottom-margin"\n    >\n    </mat-paginator>\n\n    <mat-card *ngIf="error" class="error">\n      <h4>\n        <fa-icon name="exclamation-circle" class="margin-right-xxs"></fa-icon>\n        {{ error }}\n      </h4>\n    </mat-card>\n  </div>\n</mat-card>\n';

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-recently-updated-list-entries/mt-recently-updated-list-entries.component.scss':
      /*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-recently-updated-list-entries/mt-recently-updated-list-entries.component.scss ***!
  \***************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.placeholder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 594px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbmltZS9jb21wb25lbnRzL210LXJlY2VudGx5LXVwZGF0ZWQtbGlzdC1lbnRyaWVzL1o6XFxUeHVzXFxQcm9qZWN0c1xcd2ViXFx1bm9mZmljaWFsLW5nNS1hbmlsaXN0LWNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcYW5pbWVcXGNvbXBvbmVudHNcXG10LXJlY2VudGx5LXVwZGF0ZWQtbGlzdC1lbnRyaWVzXFxtdC1yZWNlbnRseS11cGRhdGVkLWxpc3QtZW50cmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hbmltZS9jb21wb25lbnRzL210LXJlY2VudGx5LXVwZGF0ZWQtbGlzdC1lbnRyaWVzL210LXJlY2VudGx5LXVwZGF0ZWQtbGlzdC1lbnRyaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYWNlaG9sZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDU5NHB4O1xufVxuIl19 */';

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-recently-updated-list-entries/mt-recently-updated-list-entries.component.ts':
      /*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-recently-updated-list-entries/mt-recently-updated-list-entries.component.ts ***!
  \*************************************************************************************************************************/
      /*! exports provided: MtRecentlyUpdatedListEntriesComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MtRecentlyUpdatedListEntriesComponent',
          function() {
            return MtRecentlyUpdatedListEntriesComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _modules_anime_services_anime_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../modules/anime/services/anime.service */ './src/app/modules/anime/services/anime.service.ts'
        );
        /* harmony import */ var _modules_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../modules/shared/services/auth.service */ './src/app/modules/shared/services/auth.service.ts'
        );
        /* harmony import */ var _modules_shared_store_auth_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../modules/shared/store/auth.store */ './src/app/modules/shared/store/auth.store.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var MtRecentlyUpdatedListEntriesComponent = /** @class */ (function() {
          function MtRecentlyUpdatedListEntriesComponent(
            animeService,
            authService,
            authStore
          ) {
            this.animeService = animeService;
            this.authService = authService;
            this.authStore = authStore;
            this.maxEntries = 16;
            this.user = this.authStore.getUser();
            this.getRecentlyUpdatedAnime();
          }
          MtRecentlyUpdatedListEntriesComponent.prototype.changePage = function(
            pageEvent
          ) {
            this.pagination.pageIndex = pageEvent.pageIndex + 1;
            this.getRecentlyUpdatedAnime();
          };
          MtRecentlyUpdatedListEntriesComponent.prototype.getRecentlyUpdatedAnime = function() {
            var _this = this;
            if (this.user) {
              this.animeService
                .getRecentlyUpdatedAnime(this.user, {
                  perPage: this.maxEntries,
                  pageIndex: this.pagination && this.pagination.pageIndex
                })
                .pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(
                    function(response) {
                      _this.listEntries = response.mediaList;
                      _this.pagination = response.pageInfo;
                      _this.ready = true;
                    }
                  ),
                  Object(
                    rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError']
                  )(function(error) {
                    _this.error = error;
                    _this.ready = true;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['of'])();
                  })
                )
                .subscribe();
            }
          };
          MtRecentlyUpdatedListEntriesComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-recently-updated-list-entries',
                template: __webpack_require__(
                  /*! ./mt-recently-updated-list-entries.component.html */ './src/app/modules/anime/components/mt-recently-updated-list-entries/mt-recently-updated-list-entries.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./mt-recently-updated-list-entries.component.scss */ './src/app/modules/anime/components/mt-recently-updated-list-entries/mt-recently-updated-list-entries.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _modules_anime_services_anime_service__WEBPACK_IMPORTED_MODULE_3__[
                  'AnimeService'
                ],
                _modules_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__[
                  'AuthService'
                ],
                _modules_shared_store_auth_store__WEBPACK_IMPORTED_MODULE_5__[
                  'AuthStore'
                ]
              ])
            ],
            MtRecentlyUpdatedListEntriesComponent
          );
          return MtRecentlyUpdatedListEntriesComponent;
        })();

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-search-results-table/mt-search-results-table.component.html':
      /*!*********************************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-search-results-table/mt-search-results-table.component.html ***!
  \*********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<mat-table\n  #table\n  [dataSource]="dataSource"\n  [hidden]="!dataSource?.data?.length"\n  class="series-table"\n  matSort\n  (matSortChange)="sortBy($event)"\n>\n  <ng-container matColumnDef="actions">\n    <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n    <mat-cell *matCellDef="let anime">\n      <mt-media-actions [media]="anime"></mt-media-actions>\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef="cover-image">\n    <mat-header-cell *matHeaderCellDef>\n      Cover\n    </mat-header-cell>\n    <mat-cell *matCellDef="let anime">\n      <img [src]="anime.coverImage?.medium" class="cover" />\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef="title-romaji">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>\n      Title\n    </mat-header-cell>\n    <mat-cell *matCellDef="let anime">\n      <span class="text">\n        {{ anime.title.romaji }}\n      </span>\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef="format">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>\n      Format\n    </mat-header-cell>\n    <mat-cell *matCellDef="let anime">\n      <span class="text">\n        {{ \'media.formatValues.\' + anime.format | translate }}\n      </span>\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef="start-date">\n    <mat-header-cell *matHeaderCellDef mat-sort-header start="desc">\n      Year\n    </mat-header-cell>\n    <mat-cell *matCellDef="let anime">\n      <span class="text">\n        {{ anime.startDate.year }}\n      </span>\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef="genres">\n    <mat-header-cell *matHeaderCellDef>\n      Genres\n    </mat-header-cell>\n    <mat-cell *matCellDef="let anime">\n      <mat-list>\n        <mat-list-item *ngFor="let genre of anime.genres">\n          <mat-chip class="rounded">{{ genre }}</mat-chip>\n        </mat-list-item>\n      </mat-list>\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef="score">\n    <mat-header-cell *matHeaderCellDef mat-sort-header start="desc">\n      Score\n    </mat-header-cell>\n    <mat-cell *matCellDef="let anime">\n      <span class="text"> {{ anime.averageScore / 10 }}/10 </span>\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef="episodes">\n    <mat-header-cell *matHeaderCellDef mat-sort-header start="desc">\n      Episodes\n    </mat-header-cell>\n    <mat-cell *matCellDef="let anime">\n      <span class="text">\n        {{ anime.episodes }}\n      </span>\n    </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef="tableRows"></mat-header-row>\n  <mat-row\n    *matRowDef="let anime; columns: tableRows"\n    [class.completed]="anime?.mediaListEntry?.status === \'COMPLETED\'"\n    [class.dropped]="anime?.mediaListEntry?.status === \'DROPPED\'"\n    [class.paused]="anime?.mediaListEntry?.status === \'PAUSED\'"\n    [class.planned]="anime?.mediaListEntry?.status === \'PLANNING\'"\n    [class.repeating]="anime?.mediaListEntry?.status === \'REPEATING\'"\n    [class.watching]="anime?.mediaListEntry?.status === \'CURRENT\'"\n  >\n  </mat-row>\n</mat-table>\n';

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-search-results-table/mt-search-results-table.component.scss':
      /*!*********************************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-search-results-table/mt-search-results-table.component.scss ***!
  \*********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW5pbWUvY29tcG9uZW50cy9tdC1zZWFyY2gtcmVzdWx0cy10YWJsZS9tdC1zZWFyY2gtcmVzdWx0cy10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */';

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-search-results-table/mt-search-results-table.component.ts':
      /*!*******************************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-search-results-table/mt-search-results-table.component.ts ***!
  \*******************************************************************************************************/
      /*! exports provided: MtSearchResultsTableComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MtSearchResultsTableComponent',
          function() {
            return MtSearchResultsTableComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material */ './node_modules/@angular/material/esm5/material.es5.js'
        );
        /* harmony import */ var _domain_media_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../domain/media.domain */ './src/app/modules/anime/domain/media.domain.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var MtSearchResultsTableComponent = /** @class */ (function() {
          function MtSearchResultsTableComponent() {
            this.onSortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'EventEmitter'
            ]();
            this.tableRows = [
              'actions',
              'cover-image',
              'title-romaji',
              'format',
              'start-date',
              'genres',
              'score',
              'episodes'
            ];
          }
          MtSearchResultsTableComponent.prototype.ngOnInit = function() {};
          MtSearchResultsTableComponent.prototype.ngOnChanges = function(
            changes
          ) {
            if (
              changes.tableData.currentValue !== changes.tableData.previousValue
            ) {
              this.initializeDataSource();
            }
          };
          MtSearchResultsTableComponent.prototype.ngAfterViewInit = function() {
            this.dataSource.sort = this.sort;
          };
          MtSearchResultsTableComponent.prototype.sortBy = function(sort) {
            this.onSortChange.emit(
              Object(
                _domain_media_domain__WEBPACK_IMPORTED_MODULE_2__[
                  'getMediaSortFromSort'
                ]
              )(sort)
            );
          };
          MtSearchResultsTableComponent.prototype.initializeDataSource = function() {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__[
              'MatTableDataSource'
            ](this.tableData);
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Array)
            ],
            MtSearchResultsTableComponent.prototype,
            'tableData',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata(
                'design:type',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']
              )
            ],
            MtSearchResultsTableComponent.prototype,
            'onSortChange',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatSort']
              ),
              __metadata(
                'design:type',
                _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatSort']
              )
            ],
            MtSearchResultsTableComponent.prototype,
            'sort',
            void 0
          );
          MtSearchResultsTableComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-search-results-table',
                template: __webpack_require__(
                  /*! ./mt-search-results-table.component.html */ './src/app/modules/anime/components/mt-search-results-table/mt-search-results-table.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./mt-search-results-table.component.scss */ './src/app/modules/anime/components/mt-search-results-table/mt-search-results-table.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [])
            ],
            MtSearchResultsTableComponent
          );
          return MtSearchResultsTableComponent;
        })();

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-user-anime-list-table/mt-user-anime-list-table.component.html':
      /*!***********************************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-user-anime-list-table/mt-user-anime-list-table.component.html ***!
  \***********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<h3 class="no-margin-bottom margin-top-xxs vertical-padding-xs">\n  {{ \'anime.statusValues.\' + tableStatus | translate }}\n</h3>\n\n<mat-card class="no-padding">\n  <mat-table\n    #table\n    [dataSource]="dataSource"\n    [hidden]="!dataSource || dataSource.data.length < 1"\n    matSort\n    class="series-table"\n  >\n    <ng-container matColumnDef="actions">\n      <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n      <mat-cell *matCellDef="let entry">\n        <mt-media-actions [listEntry]="entry" [media]="entry.media" (onUpdate)="onUpdate($event)"> </mt-media-actions>\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef="cover-image">\n      <mat-header-cell *matHeaderCellDef>\n        {{ \'media.cover\' | translate }}\n      </mat-header-cell>\n      <mat-cell *matCellDef="let entry">\n        <img [src]="entry.media.coverImage?.medium" class="cover" />\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef="title-romaji">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>\n        {{ \'media.title\' | translate }}\n      </mat-header-cell>\n      <mat-cell *matCellDef="let entry">\n        <span class="text">\n          <span>\n            {{ entry.media.title.romaji }}\n          </span>\n          <span *ngIf="favouriteIDs?.includes(entry.media.id)">\n            <fa-icon name="heart" class="favourite"></fa-icon>\n          </span>\n        </span>\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef="format">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>\n        {{ \'media.format\' | translate }}\n      </mat-header-cell>\n      <mat-cell *matCellDef="let entry">\n        <span class="text">\n          {{ \'media.formatValues.\' + entry.media.format | translate }}\n        </span>\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef="start-date">\n      <mat-header-cell *matHeaderCellDef mat-sort-header start="desc">\n        {{ \'media.year\' | translate }}\n      </mat-header-cell>\n      <mat-cell *matCellDef="let entry">\n        <span class="text">\n          {{ entry.media.startDate.year }}\n        </span>\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef="genres">\n      <mat-header-cell *matHeaderCellDef>\n        {{ \'media.genres\' | translate }}\n      </mat-header-cell>\n      <mat-cell *matCellDef="let entry">\n        <mat-list>\n          <mat-list-item *ngFor="let genre of entry.media.genres">\n            <mat-chip class="rounded">{{ genre }}</mat-chip>\n          </mat-list-item>\n        </mat-list>\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef="score">\n      <mat-header-cell *matHeaderCellDef mat-sort-header start="desc">\n        {{ \'media.score\' | translate }}\n      </mat-header-cell>\n      <mat-cell *matCellDef="let entry">\n        <span class="text"> {{ entry.scoreRaw / 10 }}/10 </span>\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef="episodes">\n      <mat-header-cell *matHeaderCellDef mat-sort-header start="desc">\n        {{ \'media.episodes\' | translate }}\n      </mat-header-cell>\n      <mat-cell *matCellDef="let entry">\n        <span class="text">\n          {{ entry.media.episodes }}\n        </span>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef="tableRows"></mat-header-row>\n    <mat-row *matRowDef="let entry; columns: tableRows"></mat-row>\n  </mat-table>\n\n  <mat-paginator\n    #paginator\n    [showFirstLastButtons]="true"\n    [pageSize]="10"\n    [pageSizeOptions]="[5, 10, 25, 50, 75, 100, 250, 500, 750, 1000]"\n    [showFirstLastButtons]="true"\n    (page)="onPageChange()"\n  >\n  </mat-paginator>\n</mat-card>\n';

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-user-anime-list-table/mt-user-anime-list-table.component.scss':
      /*!***********************************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-user-anime-list-table/mt-user-anime-list-table.component.scss ***!
  \***********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.favourite {\n  padding: 3px 0 0;\n  color: #e91e63; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbmltZS9jb21wb25lbnRzL210LXVzZXItYW5pbWUtbGlzdC10YWJsZS9aOlxcVHh1c1xcUHJvamVjdHNcXHdlYlxcdW5vZmZpY2lhbC1uZzUtYW5pbGlzdC1jbGllbnQvbm9kZV9tb2R1bGVzXFxAYW5ndWxhclxcbWF0ZXJpYWxcXF90aGVtaW5nLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYW5pbWUvY29tcG9uZW50cy9tdC11c2VyLWFuaW1lLWxpc3QtdGFibGUvWjpcXFR4dXNcXFByb2plY3RzXFx3ZWJcXHVub2ZmaWNpYWwtbmc1LWFuaWxpc3QtY2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxhbmltZVxcY29tcG9uZW50c1xcbXQtdXNlci1hbmltZS1saXN0LXRhYmxlXFxtdC11c2VyLWFuaW1lLWxpc3QtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeTFDQSxrQ0FBQTtBQW9oREEsMkNBQUE7QUF3Q0EscUJBQUE7QUNuNUZBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNEMmpCWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hbmltZS9jb21wb25lbnRzL210LXVzZXItYW5pbWUtbGlzdC10YWJsZS9tdC11c2VyLWFuaW1lLWxpc3QtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgYWxsIHRoZSB0aGVtaW5nIGZ1bmN0aW9uYWxpdHkuXG4vLyBXZSBjYW4gdXNlIHJlbGF0aXZlIGltcG9ydHMgZm9yIGltcG9ydHMgZnJvbSB0aGUgY2RrIGJlY2F1c2Ugd2UgYnVuZGxlIGV2ZXJ5dGhpbmdcbi8vIHVwIGludG8gYSBzaW5nbGUgZmxhdCBzY3NzIGZpbGUgZm9yIG1hdGVyaWFsLlxuLy8gV2Ugd2FudCBvdmVybGF5cyB0byBhbHdheXMgYXBwZWFyIG92ZXIgdXNlciBjb250ZW50LCBzbyBzZXQgYSBiYXNlbGluZVxuLy8gdmVyeSBoaWdoIHotaW5kZXggZm9yIHRoZSBvdmVybGF5IGNvbnRhaW5lciwgd2hpY2ggaXMgd2hlcmUgd2UgY3JlYXRlIHRoZSBuZXdcbi8vIHN0YWNraW5nIGNvbnRleHQgZm9yIGFsbCBvdmVybGF5cy5cbiRjZGstei1pbmRleC1vdmVybGF5LWNvbnRhaW5lcjogMTAwMDtcbiRjZGstei1pbmRleC1vdmVybGF5OiAxMDAwO1xuJGNkay16LWluZGV4LW92ZXJsYXktYmFja2Ryb3A6IDEwMDA7XG5cbi8vIEJhY2tncm91bmQgY29sb3IgZm9yIGFsbCBvZiB0aGUgYmFja2Ryb3BzXG4kY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcC1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzIpO1xuXG4vLyBEZWZhdWx0IGJhY2tkcm9wIGFuaW1hdGlvbiBpcyBiYXNlZCBvbiB0aGUgTWF0ZXJpYWwgRGVzaWduIHN3aWZ0LWVhc2Utb3V0LlxuJGJhY2tkcm9wLWFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXMgIWRlZmF1bHQ7XG4kYmFja2Ryb3AtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG5cblxuQG1peGluIGNkay1vdmVybGF5KCkge1xuICAuY2RrLW92ZXJsYXktY29udGFpbmVyLCAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICAgIC8vIERpc2FibGUgZXZlbnRzIGZyb20gYmVpbmcgY2FwdHVyZWQgb24gdGhlIG92ZXJsYXkgY29udGFpbmVyLlxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgLy8gVGhlIGNvbnRhaW5lciBzaG91bGQgYmUgdGhlIHNpemUgb2YgdGhlIHZpZXdwb3J0LlxuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC8vIFRoZSBvdmVybGF5LWNvbnRhaW5lciBpcyBhbiBpbnZpc2libGUgZWxlbWVudCB3aGljaCBjb250YWlucyBhbGwgaW5kaXZpZHVhbCBvdmVybGF5cy5cbiAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5LWNvbnRhaW5lcjtcblxuICAgICY6ZW1wdHkge1xuICAgICAgLy8gSGlkZSB0aGUgZWxlbWVudCB3aGVuIGl0IGRvZXNuJ3QgaGF2ZSBhbnkgY2hpbGQgbm9kZXMuIFRoaXMgZG9lc24ndFxuICAgICAgLy8gaW5jbHVkZSBvdmVybGF5cyB0aGF0IGhhdmUgYmVlbiBkZXRhY2hlZCwgcmF0aGVyIHRoYW4gZGlzcG9zZWQuXG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC8vIFdlIHVzZSBhbiBleHRyYSB3cmFwcGVyIGVsZW1lbnQgaW4gb3JkZXIgdG8gdXNlIG1ha2UgdGhlIG92ZXJsYXkgaXRzZWxmIGEgZmxleCBpdGVtLlxuICAvLyBUaGlzIG1ha2VzIGNlbnRlcmluZyB0aGUgb3ZlcmxheSBlYXN5IHdpdGhvdXQgcnVubmluZyBpbnRvIHRoZSBzdWJwaXhlbCByZW5kZXJpbmdcbiAgLy8gcHJvYmxlbXMgdGllZCB0byB1c2luZyBgdHJhbnNmb3JtYCBhbmQgd2l0aG91dCBpbnRlcmZlcmluZyB3aXRoIHRoZSBvdGhlciBwb3NpdGlvblxuICAvLyBzdHJhdGVnaWVzLlxuICAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5O1xuICB9XG5cbiAgLy8gQSBzaW5nbGUgb3ZlcmxheSBwYW5lLlxuICAuY2RrLW92ZXJsYXktcGFuZSB7XG4gICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgZm9yIHRoaXMgb25lIHRvIHN0YXJ0IG9mZiBgYWJzb2x1dGVgLFxuICAgIC8vIGluIG9yZGVyIGZvciB1cyB0byBiZSBhYmxlIHRvIG1lYXN1cmUgaXQgY29ycmVjdGx5LlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5O1xuXG4gICAgLy8gRm9yIGNvbm5lY3RlZC1wb3NpdGlvbiBvdmVybGF5cywgd2Ugc2V0IGBkaXNwbGF5OiBmbGV4YCBpblxuICAgIC8vIG9yZGVyIHRvIGZvcmNlIGBtYXgtd2lkdGhgIGFuZCBgbWF4LWhlaWdodGAgdG8gdGFrZSBlZmZlY3QuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5jZGstb3ZlcmxheS1iYWNrZHJvcCB7XG4gICAgLy8gVE9ETyhqZWxib3Vybik6IHJldXNlIHNpZGVuYXYgZnVsbHNjcmVlbiBtaXhpbi5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXktYmFja2Ryb3A7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICRiYWNrZHJvcC1hbmltYXRpb24tZHVyYXRpb24gJGJhY2tkcm9wLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb247XG4gICAgb3BhY2l0eTogMDtcblxuICAgICYuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAvLyBJbiBoaWdoIGNvbnRyYXN0IG1vZGUgdGhlIHJnYmEgYmFja2dyb3VuZCB3aWxsIGJlY29tZSBzb2xpZCBzbyB3ZSBuZWVkIHRvIGZhbGwgYmFja1xuICAgICAgLy8gdG8gbWFraW5nIGl0IG9wYXF1ZSB1c2luZyBgb3BhY2l0eWAuIE5vdGUgdGhhdCB3ZSBjYW4ndCB1c2UgdGhlIGBjZGstaGlnaC1jb250cmFzdGBcbiAgICAgIC8vIG1peGluLCBiZWNhdXNlIHdlIGNhbid0IG5vcm1hbGl6ZSB0aGUgaW1wb3J0IHBhdGggdG8gdGhlIF9hMTF5LnNjc3MgYm90aCBmb3IgdGhlXG4gICAgICAvLyBzb3VyY2UgYW5kIHdoZW4gdGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkLiBTZWUgIzEwOTA4LlxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kOiAkY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcC1iYWNrZ3JvdW5kO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wIHtcbiAgICAvLyBOb3RlOiBhcyBvZiBGaXJlZm94IDU3LCBoYXZpbmcgdGhlIGJhY2tkcm9wIGJlIGBiYWNrZ3JvdW5kOiBub25lYCB3aWxsIHByZXZlbnQgaXQgZnJvbVxuICAgIC8vIGNhcHR1cmluZyB0aGUgdXNlcidzIG1vdXNlIHNjcm9sbCBldmVudHMuIFNpbmNlIHdlIGFsc28gY2FuJ3QgdXNlIHNvbWV0aGluZyBsaWtlXG4gICAgLy8gYHJnYmEoMCwgMCwgMCwgMClgLCB3ZSB3b3JrIGFyb3VuZCB0aGUgaW5jb25zaXN0ZW5jeSBieSBub3Qgc2V0dGluZyB0aGUgYmFja2dyb3VuZCBhdFxuICAgIC8vIGFsbCBhbmQgdXNpbmcgYG9wYWNpdHlgIHRvIG1ha2UgdGhlIGVsZW1lbnQgdHJhbnNwYXJlbnQuXG4gICAgJiwgJi5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG5cbiAgLy8gT3ZlcmxheSBwYXJlbnQgZWxlbWVudCB1c2VkIHdpdGggdGhlIGNvbm5lY3RlZCBwb3NpdGlvbiBzdHJhdGVneS4gVXNlZCB0byBjb25zdHJhaW4gdGhlXG4gIC8vIG92ZXJsYXkgZWxlbWVudCdzIHNpemUgdG8gZml0IHdpdGhpbiB0aGUgdmlld3BvcnQuXG4gIC5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG5cbiAgICAvLyBXZSB1c2UgYGRpc3BsYXk6IGZsZXhgIG9uIHRoaXMgZWxlbWVudCBleGNsdXNpdmVseSBmb3IgY2VudGVyaW5nIGNvbm5lY3RlZCBvdmVybGF5cy5cbiAgICAvLyBXaGVuICpub3QqIGNlbnRlcmluZywgYSB0b3AvbGVmdC9ib3R0b20vcmlnaHQgd2lsbCBiZSBzZXQgd2hpY2ggb3ZlcnJpZGVzIHRoZSBub3JtYWxcbiAgICAvLyBmbGV4IGxheW91dC5cbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLy8gV2UgdXNlIHRoZSBgY29sdW1uYCBkaXJlY3Rpb24gaGVyZSB0byBhdm9pZCBzb21lIGZsZXhib3ggaXNzdWVzIGluIEVkZ2VcbiAgICAvLyB3aGVuIHVzaW5nIHRoZSBcImdyb3cgYWZ0ZXIgb3BlblwiIG9wdGlvbnMuXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC8vIEFkZCBzb21lIGRpbWVuc2lvbnMgc28gdGhlIGVsZW1lbnQgaGFzIGFuIGBpbm5lclRleHRgIHdoaWNoIHNvbWUgcGVvcGxlIGRlcGVuZCBvbiBpbiB0ZXN0cy5cbiAgICBtaW4td2lkdGg6IDFweDtcbiAgICBtaW4taGVpZ2h0OiAxcHg7XG4gIH1cblxuICAvLyBVc2VkIHdoZW4gZGlzYWJsaW5nIGdsb2JhbCBzY3JvbGxpbmcuXG4gIC5jZGstZ2xvYmFsLXNjcm9sbGJsb2NrIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgICAvLyBOZWNlc3NhcnkgZm9yIHRoZSBjb250ZW50IG5vdCB0byBsb3NlIGl0cyB3aWR0aC4gTm90ZSB0aGF0IHdlJ3JlIHVzaW5nIDEwMCUsIGluc3RlYWQgb2ZcbiAgICAvLyAxMDB2dywgYmVjYXVzZSAxMDB2dyBpbmNsdWRlcyB0aGUgd2lkdGggcGx1cyB0aGUgc2Nyb2xsYmFyLCB3aGVyZWFzIDEwMCUgaXMgdGhlIHdpZHRoXG4gICAgLy8gdGhhdCB0aGUgZWxlbWVudCBoYWQgYmVmb3JlIHdlIG1hZGUgaXQgYGZpeGVkYC5cbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC8vIE5vdGU6IHRoaXMgd2lsbCBhbHdheXMgYWRkIGEgc2Nyb2xsYmFyIHRvIHdoYXRldmVyIGVsZW1lbnQgaXQgaXMgb24sIHdoaWNoIGNhblxuICAgIC8vIHBvdGVudGlhbGx5IHJlc3VsdCBpbiBkb3VibGUgc2Nyb2xsYmFycy4gSXQgc2hvdWxkbid0IGJlIGFuIGlzc3VlLCBiZWNhdXNlIHdlIHdvbid0XG4gICAgLy8gYmxvY2sgc2Nyb2xsaW5nIG9uIGEgcGFnZSB0aGF0IGRvZXNuJ3QgaGF2ZSBhIHNjcm9sbGJhciBpbiB0aGUgZmlyc3QgcGxhY2UuXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9XG59XG5cbkBtaXhpbiBjZGstYTExeSB7XG4gIC5jZGstdmlzdWFsbHktaGlkZGVuIHtcbiAgICBib3JkZXI6IDA7XG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMXB4O1xuXG4gICAgLy8gQXZvaWQgYnJvd3NlcnMgcmVuZGVyaW5nIHRoZSBmb2N1cyByaW5nIGluIHNvbWUgY2FzZXMuXG4gICAgb3V0bGluZTogMDtcblxuICAgIC8vIEF2b2lkIHNvbWUgY2FzZXMgd2hlcmUgdGhlIGJyb3dzZXIgd2lsbCBzdGlsbCByZW5kZXIgdGhlIG5hdGl2ZSBjb250cm9scyAoc2VlICM5MDQ5KS5cbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICB9XG59XG5cbi8vIEFwcGxpZXMgc3R5bGVzIGZvciB1c2VycyBpbiBoaWdoIGNvbnRyYXN0IG1vZGUuIE5vdGUgdGhhdCB0aGlzIG9ubHkgYXBwbGllc1xuLy8gdG8gTWljcm9zb2Z0IGJyb3dzZXJzLiBDaHJvbWUgY2FuIGJlIGluY2x1ZGVkIGJ5IGNoZWNraW5nIGZvciB0aGUgYGh0bWxbaGNdYFxuLy8gYXR0cmlidXRlLCBob3dldmVyIENocm9tZSBoYW5kbGVzIGhpZ2ggY29udHJhc3QgZGlmZmVyZW50bHkuXG4vL1xuLy8gQHBhcmFtIHRhcmdldCBXaGljaCBraW5kIG9mIGhpZ2ggY29udHJhc3Qgc2V0dGluZyB0byB0YXJnZXQuIERlZmF1bHRzIHRvIGBhY3RpdmVgLCBjYW4gYmVcbi8vICAgIGB3aGl0ZS1vbi1ibGFja2Agb3IgYGJsYWNrLW9uLXdoaXRlYC5cbkBtaXhpbiBjZGstaGlnaC1jb250cmFzdCgkdGFyZ2V0OiBhY3RpdmUpIHtcbiAgQG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDogJHRhcmdldCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIENvcmUgc3R5bGVzIHRoYXQgZW5hYmxlIG1vbml0b3JpbmcgYXV0b2ZpbGwgc3RhdGUgb2YgdGV4dCBmaWVsZHMuXG5AbWl4aW4gY2RrLXRleHQtZmllbGQge1xuICAvLyBLZXlmcmFtZXMgdGhhdCBhcHBseSBubyBzdHlsZXMsIGJ1dCBhbGxvdyB1cyB0byBtb25pdG9yIHdoZW4gYW4gdGV4dCBmaWVsZCBiZWNvbWVzIGF1dG9maWxsZWRcbiAgLy8gYnkgd2F0Y2hpbmcgZm9yIHRoZSBhbmltYXRpb24gZXZlbnRzIHRoYXQgYXJlIGZpcmVkIHdoZW4gdGhleSBzdGFydC4gTm90ZTogdGhlIC8qISovIGNvbW1lbnQgaXNcbiAgLy8gbmVlZGVkIHRvIHByZXZlbnQgTGliU2FzcyBmcm9tIHN0cmlwcGluZyB0aGUga2V5ZnJhbWVzIG91dC5cbiAgLy8gQmFzZWQgb246IGh0dHBzOi8vbWVkaXVtLmNvbS9AYnJ1bm4vZGV0ZWN0aW5nLWF1dG9maWxsZWQtZmllbGRzLWluLWphdmFzY3JpcHQtYWVkNTk4ZDI1ZGE3XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgey8qISovfVxuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZCB7LyohKi99XG5cbiAgLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgICBhbmltYXRpb24tbmFtZTogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQ7XG4gIH1cblxuICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOm5vdCg6LXdlYmtpdC1hdXRvZmlsbCkge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQ7XG4gIH1cblxuICAvLyBSZW1vdmUgdGhlIHJlc2l6ZSBoYW5kbGUgb24gYXV0b3NpemluZyB0ZXh0YXJlYXMsIGJlY2F1c2Ugd2hhdGV2ZXIgaGVpZ2h0XG4gIC8vIHRoZSB1c2VyIHJlc2l6ZWQgdG8gd2lsbCBiZSBvdmVyd3JpdHRlbiBvbmNlIHRoZXkgc3RhcnQgdHlwaW5nIGFnYWluLlxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgfVxuXG4gIC8vIFRoaXMgY2xhc3MgaXMgdGVtcG9yYXJpbHkgYXBwbGllZCB0byB0aGUgdGV4dGFyZWEgd2hlbiBpdCBpcyBiZWluZyBtZWFzdXJlZC4gSXQgaXMgaW1tZWRpYXRlbHlcbiAgLy8gcmVtb3ZlZCB3aGVuIG1lYXN1cmluZyBpcyBjb21wbGV0ZS4gV2UgdXNlIGAhaW1wb3J0YW50YCBydWxlcyBoZXJlIHRvIG1ha2Ugc3VyZSB1c2VyLXNwZWNpZmllZFxuICAvLyBydWxlcyBkbyBub3QgaW50ZXJmZXJlIHdpdGggdGhlIG1lYXN1cmVtZW50LlxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nIHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgLy8gSGF2aW5nIDJweCB0b3AgYW5kIGJvdHRvbSBwYWRkaW5nIHNlZW1zIHRvIGZpeCBhIGJ1ZyB3aGVyZSBDaHJvbWUgZ2V0cyBhbiBpbmNvcnJlY3RcbiAgICAvLyBtZWFzdXJlbWVudC4gV2UganVzdCBoYXZlIHRvIGFjY291bnQgZm9yIGl0IGxhdGVyIGFuZCBzdWJ0cmFjdCBpdCBvZmYgdGhlIGZpbmFsIHJlc3VsdC5cbiAgICBwYWRkaW5nOiAycHggMCAhaW1wb3J0YW50O1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLy8gVXNlZCB0byBnZW5lcmF0ZSBVSURzIGZvciBrZXlmcmFtZXMgdXNlZCB0byBjaGFuZ2UgdGhlIHRleHQgZmllbGQgYXV0b2ZpbGwgc3R5bGVzLlxuJGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50OiAwO1xuXG4vLyBNaXhpbiB1c2VkIHRvIGFwcGx5IGN1c3RvbSBiYWNrZ3JvdW5kIGFuZCBmb3JlZ3JvdW5kIGNvbG9ycyB0byBhbiBhdXRvZmlsbGVkIHRleHQgZmllbGQuXG4vLyBCYXNlZCBvbjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjc4MTU0OS9cbi8vIHJlbW92aW5nLWlucHV0LWJhY2tncm91bmQtY29sb3VyLWZvci1jaHJvbWUtYXV0b2NvbXBsZXRlI2Fuc3dlci0zNzQzMjI2MFxuQG1peGluIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yKCRiYWNrZ3JvdW5kLCAkZm9yZWdyb3VuZDonJykge1xuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fSB7XG4gICAgdG8ge1xuICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICAgICBAaWYgJGZvcmVncm91bmQgIT0gJycgeyBjb2xvcjogJGZvcmVncm91bmQ7IH1cbiAgICB9XG4gIH1cblxuICAmOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH07XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgfVxuXG4gICYuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCxcbiAgICAgICAgICAgICAgICAgICAgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9O1xuICB9XG5cbiAgJGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50OlxuICAgICAgJGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50ICsgMSAhZ2xvYmFsO1xufVxuXG5cbi8vIENvcmUgc3R5bGVzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYXBwbHkgbWF0ZXJpYWwgZGVzaWduIHRyZWF0bWVudHMgdG8gYW55IGVsZW1lbnQuXG4vLyBNZWRpYSBxdWVyaWVzXG4vLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBDaGFuZ2UgJG1hdC14c21hbGwgYW5kICRtYXQtc21hbGwgdXNhZ2VzIHRvIHJlbHkgb24gQnJlYWtwb2ludE9ic2VydmVyLFxuJG1hdC14c21hbGw6ICdtYXgtd2lkdGg6IDU5OXB4JztcbiRtYXQtc21hbGw6ICdtYXgtd2lkdGg6IDk1OXB4JztcblxuLy8gVE9ETzogUmV2aXNpdCBhbGwgei1pbmRpY2VzIGJlZm9yZSBiZXRhXG4vLyB6LWluZGV4IG1hc3RlciBsaXN0XG5cbiR6LWluZGV4LWZhYjogMjAgIWRlZmF1bHQ7XG4kei1pbmRleC1kcmF3ZXI6IDEwMCAhZGVmYXVsdDtcblxuLy8gR2xvYmFsIGNvbnN0YW50c1xuJHBpOiAzLjE0MTU5MjY1O1xuXG4vLyBQYWRkaW5nIGJldHdlZW4gaW5wdXQgdG9nZ2xlcyBhbmQgdGhlaXIgbGFiZWxzXG4kbWF0LXRvZ2dsZS1wYWRkaW5nOiA4cHggIWRlZmF1bHQ7XG4vLyBXaWR0aCBhbmQgaGVpZ2h0IG9mIGlucHV0IHRvZ2dsZXNcbiRtYXQtdG9nZ2xlLXNpemU6IDIwcHggIWRlZmF1bHQ7XG5cbi8vIEVhc2luZyBDdXJ2ZXNcbi8vIFRPRE8oamVsYm91cm4pOiBhbGwgb2YgdGhlc2UgbmVlZCB0byBiZSByZXZpc2l0ZWRcblxuLy8gVGhlIGRlZmF1bHQgYW5pbWF0aW9uIGN1cnZlcyB1c2VkIGJ5IG1hdGVyaWFsIGRlc2lnbi5cbiRtYXQtbGluZWFyLW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMC4xKSAhZGVmYXVsdDtcbiRtYXQtZmFzdC1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgIWRlZmF1bHQ7XG4kbWF0LWZhc3Qtb3V0LWxpbmVhci1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpICFkZWZhdWx0O1xuXG4kZWFzZS1pbi1vdXQtY3VydmUtZnVuY3Rpb246IGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKSAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2Utb3V0LWR1cmF0aW9uOiA0MDBtcyAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLW91dC10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2Utb3V0OiBhbGwgJHN3aWZ0LWVhc2Utb3V0LWR1cmF0aW9uICRzd2lmdC1lYXNlLW91dC10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1lYXNlLWluLWR1cmF0aW9uOiAzMDBtcyAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuNTUsIDAuMikgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbjogYWxsICRzd2lmdC1lYXNlLWluLWR1cmF0aW9uICRzd2lmdC1lYXNlLWluLXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2UtaW4tb3V0LWR1cmF0aW9uOiA1MDBtcyAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluLW91dC10aW1pbmctZnVuY3Rpb246ICRlYXNlLWluLW91dC1jdXJ2ZS1mdW5jdGlvbiAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluLW91dDogYWxsICRzd2lmdC1lYXNlLWluLW91dC1kdXJhdGlvbiAkc3dpZnQtZWFzZS1pbi1vdXQtdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtbGluZWFyLWR1cmF0aW9uOiA4MG1zICFkZWZhdWx0O1xuJHN3aWZ0LWxpbmVhci10aW1pbmctZnVuY3Rpb246IGxpbmVhciAhZGVmYXVsdDtcbiRzd2lmdC1saW5lYXI6IGFsbCAkc3dpZnQtbGluZWFyLWR1cmF0aW9uICRzd2lmdC1saW5lYXItdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG5cblxuLy8gQSBjb2xsZWN0aW9uIG9mIG1peGlucyBhbmQgQ1NTIGNsYXNzZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBhcHBseSBlbGV2YXRpb24gdG8gYSBtYXRlcmlhbFxuLy8gZWxlbWVudC5cbi8vIFNlZTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vZW52aXJvbm1lbnQvZWxldmF0aW9uLmh0bWxcbi8vIEV4YW1wbGVzOlxuLy9cbi8vXG4vLyAubWF0LWZvbyB7XG4vLyAgIEBpbmNsdWRlICRtYXQtZWxldmF0aW9uKDIpO1xuLy9cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIEBpbmNsdWRlICRtYXQtZWxldmF0aW9uKDgpO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gPGRpdiBpZD1cImV4dGVybmFsLWNhcmRcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejJcIj48cD5Tb21lIGNvbnRlbnQ8L3A+PC9kaXY+XG4vL1xuLy8gRm9yIGFuIGV4cGxhbmF0aW9uIG9mIHRoZSBkZXNpZ24gYmVoaW5kIGhvdyBlbGV2YXRpb24gaXMgaW1wbGVtZW50ZWQsIHNlZSB0aGUgZGVzaWduIGRvYyBhdFxuLy8gaHR0cHM6Ly9nb28uZ2wvS3EwazlaLlxuXG4vLyBDb2xvcnMgZm9yIHVtYnJhLCBwZW51bWJyYSwgYW5kIGFtYmllbnQgc2hhZG93cy4gQXMgZGVzY3JpYmVkIGluIHRoZSBkZXNpZ24gZG9jLCBlYWNoIGVsZXZhdGlvblxuLy8gbGV2ZWwgaXMgY3JlYXRlZCB1c2luZyBhIHNldCBvZiAzIHNoYWRvdyB2YWx1ZXMsIG9uZSBmb3IgdW1icmEgKHRoZSBzaGFkb3cgcmVwcmVzZW50aW5nIHRoZVxuLy8gc3BhY2UgY29tcGxldGVseSBvYnNjdXJlZCBieSBhbiBvYmplY3QgcmVsYXRpdmUgdG8gaXRzIGxpZ2h0IHNvdXJjZSksIG9uZSBmb3IgcGVudW1icmEgKHRoZVxuLy8gc3BhY2UgcGFydGlhbGx5IG9ic2N1cmVkIGJ5IGFuIG9iamVjdCksIGFuZCBvbmUgZm9yIGFtYmllbnQgKHRoZSBzcGFjZSB3aGljaCBjb250YWlucyB0aGUgb2JqZWN0XG4vLyBpdHNlbGYpLiBGb3IgYSBmdXJ0aGVyIGV4cGxhbmF0aW9uIG9mIHRoZXNlIHRlcm1zIGFuZCB0aGVpciBtZWFuaW5ncywgc2VlXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9VbWJyYSxfcGVudW1icmFfYW5kX2FudHVtYnJhLlxuXG4vLyBNYXBzIGZvciB0aGUgZGlmZmVyZW50IHNoYWRvdyBzZXRzIGFuZCB0aGVpciB2YWx1ZXMgd2l0aGluIGVhY2ggei1zcGFjZS4gVGhlc2UgdmFsdWVzIHdlcmVcbi8vIGNyZWF0ZWQgYnkgdGFraW5nIGEgZmV3IHJlZmVyZW5jZSBzaGFkb3cgc2V0cyBjcmVhdGVkIGJ5IEdvb2dsZSdzIERlc2lnbmVycyBhbmQgaW50ZXJwb2xhdGluZ1xuLy8gYWxsIG9mIHRoZSB2YWx1ZXMgYmV0d2VlbiB0aGVtLlxuXG5AZnVuY3Rpb24gX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICAkc2hhZG93LWNvbG9yOiBpZih0eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMiksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDJweCAxcHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDNweCAxcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCAzcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDJweCA0cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDRweCA1cHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDVweCA1cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDVweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCA2cHggNnB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggNnB4IDdweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCA3cHggOHB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggN3B4IDlweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDhweCA5cHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCA4cHggMTBweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDhweCAxMXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggOXB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCA5cHggMTJweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDEwcHggMTRweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDExcHggMTRweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDExcHggMTVweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDFweCAxcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggMnB4IDJweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAzcHggNHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDRweCA1cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggNXB4IDhweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNjogJzBweCA2cHggMTBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNzogJzBweCA3cHggMTBweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgODogJzBweCA4cHggMTBweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgOTogJzBweCA5cHggMTJweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTA6ICcwcHggMTBweCAxNHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCAxMXB4IDE1cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDEycHggMTdweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTM6ICcwcHggMTNweCAxOXB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCAxNHB4IDIxcHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDE1cHggMjJweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTY6ICcwcHggMTZweCAyNHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCAxN3B4IDI2cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDE4cHggMjhweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTk6ICcwcHggMTlweCAyOXB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCAyMHB4IDMxcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDIxcHggMzNweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggMjJweCAzNXB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCAyM3B4IDM2cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDI0cHggMzhweCAzcHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuQGZ1bmN0aW9uIF9nZXQtYW1iaWVudC1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICAkc2hhZG93LWNvbG9yOiBpZih0eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAxcHggM3B4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDFweCA1cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggMXB4IDhweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCAxcHggMTBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCAxcHggMTRweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNjogJzBweCAxcHggMThweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNzogJzBweCAycHggMTZweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgODogJzBweCAzcHggMTRweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgOTogJzBweCAzcHggMTZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTA6ICcwcHggNHB4IDE4cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDRweCAyMHB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCA1cHggMjJweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTM6ICcwcHggNXB4IDI0cHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDVweCAyNnB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCA2cHggMjhweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTY6ICcwcHggNnB4IDMwcHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDZweCAzMnB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCA3cHggMzRweCA2cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTk6ICcwcHggN3B4IDM2cHggNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDhweCAzOHB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCA4cHggNDBweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggOHB4IDQycHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDlweCA0NHB4IDhweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCA5cHggNDZweCA4cHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuLy8gVGhlIGRlZmF1bHQgZHVyYXRpb24gdmFsdWUgZm9yIGVsZXZhdGlvbiB0cmFuc2l0aW9ucy5cbiRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tZHVyYXRpb246IDI4MG1zICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBlYXNpbmcgdmFsdWUgZm9yIGVsZXZhdGlvbiB0cmFuc2l0aW9ucy5cbiRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiAkbWF0LWZhc3Qtb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uO1xuXG4vLyBUaGUgZGVmYXVsdCBjb2xvciBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kbWF0LWVsZXZhdGlvbi1jb2xvcjogYmxhY2sgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IG9wYWNpdHkgc2NhbGluZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kbWF0LWVsZXZhdGlvbi1vcGFjaXR5OiAxICFkZWZhdWx0O1xuXG4vLyBQcmVmaXggZm9yIGVsZXZhdGlvbi1yZWxhdGVkIHNlbGVjdG9ycy5cbiRfbWF0LWVsZXZhdGlvbi1wcmVmaXg6ICdtYXQtZWxldmF0aW9uLXonO1xuXG4vLyBBcHBsaWVzIHRoZSBjb3JyZWN0IGNzcyBydWxlcyB0byBhbiBlbGVtZW50IHRvIGdpdmUgaXQgdGhlIGVsZXZhdGlvbiBzcGVjaWZpZWQgYnkgJHpWYWx1ZS5cbi8vIFRoZSAkelZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNC5cbkBtaXhpbiBtYXQtZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvcjogJG1hdC1lbGV2YXRpb24tY29sb3IsICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gIEBpZiB0eXBlLW9mKCR6VmFsdWUpICE9IG51bWJlciBvciBub3QgdW5pdGxlc3MoJHpWYWx1ZSkge1xuICAgIEBlcnJvciAnJHpWYWx1ZSBtdXN0IGJlIGEgdW5pdGxlc3MgbnVtYmVyJztcbiAgfVxuICBAaWYgJHpWYWx1ZSA8IDAgb3IgJHpWYWx1ZSA+IDI0IHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0JztcbiAgfVxuXG4gIGJveC1zaGFkb3c6ICN7bWFwLWdldChfZ2V0LXVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9LFxuICAgICAgICAgICAgICAje21hcC1nZXQoX2dldC1wZW51bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAtZ2V0KF9nZXQtYW1iaWVudC1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfTtcbn1cblxuQG1peGluIF9tYXQtdGhlbWUtZWxldmF0aW9uKCR6VmFsdWUsICR0aGVtZSwgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGVsZXZhdGlvbi1jb2xvcjogbWFwLWdldCgkZm9yZWdyb3VuZCwgZWxldmF0aW9uKTtcbiAgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0OiBpZigkZWxldmF0aW9uLWNvbG9yID09IG51bGwsICRtYXQtZWxldmF0aW9uLWNvbG9yLCAkZWxldmF0aW9uLWNvbG9yKTtcblxuICBAaW5jbHVkZSBtYXQtZWxldmF0aW9uKCR6VmFsdWUsICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdCwgJG9wYWNpdHkpO1xufVxuXG4vLyBBcHBsaWVzIHRoZSBlbGV2YXRpb24gdG8gYW4gZWxlbWVudCBpbiBhIG1hbm5lciB0aGF0IGFsbG93c1xuLy8gY29uc3VtZXJzIHRvIG92ZXJyaWRlIGl0IHZpYSB0aGUgTWF0ZXJpYWwgZWxldmF0aW9uIGNsYXNzZXMuXG5AbWl4aW4gbWF0LW92ZXJyaWRhYmxlLWVsZXZhdGlvbihcbiAgICAkelZhbHVlLFxuICAgICRjb2xvcjogJG1hdC1lbGV2YXRpb24tY29sb3IsXG4gICAgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgJjpub3QoW2NsYXNzKj0nI3skX21hdC1lbGV2YXRpb24tcHJlZml4fSddKSB7XG4gICAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbigkelZhbHVlLCAkY29sb3IsICRvcGFjaXR5KTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oJHpWYWx1ZSwgJHRoZW1lLCAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkZWxldmF0aW9uLWNvbG9yOiBtYXAtZ2V0KCRmb3JlZ3JvdW5kLCBlbGV2YXRpb24pO1xuICAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQ6IGlmKCRlbGV2YXRpb24tY29sb3IgPT0gbnVsbCwgJG1hdC1lbGV2YXRpb24tY29sb3IsICRlbGV2YXRpb24tY29sb3IpO1xuXG4gIEBpbmNsdWRlIG1hdC1vdmVycmlkYWJsZS1lbGV2YXRpb24oJHpWYWx1ZSwgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0LCAkb3BhY2l0eSk7XG59XG5cbi8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgdHJhbnNpdGlvbiBwcm9wZXJ0eSBmb3IgZWxldmF0aW9uLlxuLy8gQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIGRpcmVjdGx5IGlzIHVzZWZ1bCBpbiBzaXR1YXRpb25zIHdoZXJlIGEgY29tcG9uZW50IG5lZWRzIHRvIHRyYW5zaXRpb25cbi8vIG1vcmUgdGhhbiBvbmUgcHJvcGVydHkuXG4vL1xuLy8gLmZvbyB7XG4vLyAgIHRyYW5zaXRpb246IG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZSgpLCBvcGFjaXR5IDEwMG1zIGVhc2U7XG4vLyB9XG5AZnVuY3Rpb24gbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKFxuICAgICRkdXJhdGlvbjogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbikge1xuICBAcmV0dXJuIGJveC1zaGFkb3cgI3skZHVyYXRpb259ICN7JGVhc2luZ307XG59XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIG5lZWRlZCB0byBoYXZlIGFuIGVsZW1lbnQgdHJhbnNpdGlvbiBiZXR3ZWVuIGVsZXZhdGlvbnMuXG4vLyBUaGlzIG1peGluIHNob3VsZCBiZSBhcHBsaWVkIHRvIGVsZW1lbnRzIHdob3NlIGVsZXZhdGlvbiB2YWx1ZXMgd2lsbCBjaGFuZ2UgZGVwZW5kaW5nIG9uIHRoZWlyXG4vLyBjb250ZXh0IChlLmcuIHdoZW4gYWN0aXZlIG9yIGRpc2FibGVkKS5cbi8vXG4vLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBCb3RoIHRoaXMgbWl4aW4gYW5kIHRoZSBhYm92ZSBmdW5jdGlvbiB1c2UgZGVmYXVsdCBwYXJhbWV0ZXJzIHNvIHRoZXkgY2FuXG4vLyBiZSB1c2VkIGluIHRoZSBzYW1lIHdheSBieSBjbGllbnRzLlxuQG1peGluIG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbihcbiAgICAkZHVyYXRpb246ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tZHVyYXRpb24sXG4gICAgJGVhc2luZzogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgdHJhbnNpdGlvbjogbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCRkdXJhdGlvbiwgJGVhc2luZyk7XG59XG5cbi8vIENvbG9yIHBhbGV0dGVzIGZyb20gdGhlIE1hdGVyaWFsIERlc2lnbiBzcGVjLlxuLy8gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbG9yL1xuLy9cbi8vIENvbnRyYXN0IGNvbG9ycyBhcmUgaGFyZC1jb2RlZCBiZWNhdXNlIGl0IGlzIHRvbyBkaWZmaWN1bHQgKHByb2JhYmx5IGltcG9zc2libGUpIHRvXG4vLyBjYWxjdWxhdGUgdGhlbS4gVGhlc2UgY29udHJhc3QgY29sb3JzIGFyZSBwdWxsZWQgZnJvbSB0aGUgcHVibGljIE1hdGVyaWFsIERlc2lnbiBzcGVjIHN3YXRjaGVzLlxuLy8gV2hpbGUgdGhlIGNvbnRyYXN0IGNvbG9ycyBpbiB0aGUgc3BlYyBhcmUgbm90IHByZXNjcmlwdGl2ZSwgd2UgdXNlIHRoZW0gZm9yIGNvbnZlbmllbmNlLlxuXG5cbi8vIEBkZXByZWNhdGVkIHJlbmFtZWQgdG8gJGRhcmstcHJpbWFyeS10ZXh0LlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTg3LW9wYWNpdHk6IHJnYmEoYmxhY2ssIDAuODcpO1xuLy8gQGRlcHJlY2F0ZWQgcmVuYW1lZCB0byAkbGlnaHQtcHJpbWFyeS10ZXh0LlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJHdoaXRlLTg3LW9wYWNpdHk6IHJnYmEod2hpdGUsIDAuODcpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRkYXJrLVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stMTItb3BhY2l0eTogcmdiYShibGFjaywgMC4xMik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGxpZ2h0LVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtMTItb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC4xMik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGRhcmstW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay02LW9wYWNpdHk6IHJnYmEoYmxhY2ssIDAuMDYpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRsaWdodC1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJHdoaXRlLTYtb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC4wNik7XG5cbiRkYXJrLXByaW1hcnktdGV4dDogcmdiYShibGFjaywgMC44Nyk7XG4kZGFyay1zZWNvbmRhcnktdGV4dDogcmdiYShibGFjaywgMC41NCk7XG4kZGFyay1kaXNhYmxlZC10ZXh0OiByZ2JhKGJsYWNrLCAwLjM4KTtcbiRkYXJrLWRpdmlkZXJzOiByZ2JhKGJsYWNrLCAwLjEyKTtcbiRkYXJrLWZvY3VzZWQ6IHJnYmEoYmxhY2ssIDAuMTIpO1xuJGxpZ2h0LXByaW1hcnktdGV4dDogd2hpdGU7XG4kbGlnaHQtc2Vjb25kYXJ5LXRleHQ6IHJnYmEod2hpdGUsIDAuNyk7XG4kbGlnaHQtZGlzYWJsZWQtdGV4dDogcmdiYSh3aGl0ZSwgMC41KTtcbiRsaWdodC1kaXZpZGVyczogcmdiYSh3aGl0ZSwgMC4xMik7XG4kbGlnaHQtZm9jdXNlZDogcmdiYSh3aGl0ZSwgMC4xMik7XG5cbiRtYXQtcmVkOiAoXG4gIDUwOiAjZmZlYmVlLFxuICAxMDA6ICNmZmNkZDIsXG4gIDIwMDogI2VmOWE5YSxcbiAgMzAwOiAjZTU3MzczLFxuICA0MDA6ICNlZjUzNTAsXG4gIDUwMDogI2Y0NDMzNixcbiAgNjAwOiAjZTUzOTM1LFxuICA3MDA6ICNkMzJmMmYsXG4gIDgwMDogI2M2MjgyOCxcbiAgOTAwOiAjYjcxYzFjLFxuICBBMTAwOiAjZmY4YTgwLFxuICBBMjAwOiAjZmY1MjUyLFxuICBBNDAwOiAjZmYxNzQ0LFxuICBBNzAwOiAjZDUwMDAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtcGluazogKFxuICA1MDogI2ZjZTRlYyxcbiAgMTAwOiAjZjhiYmQwLFxuICAyMDA6ICNmNDhmYjEsXG4gIDMwMDogI2YwNjI5MixcbiAgNDAwOiAjZWM0MDdhLFxuICA1MDA6ICNlOTFlNjMsXG4gIDYwMDogI2Q4MWI2MCxcbiAgNzAwOiAjYzIxODViLFxuICA4MDA6ICNhZDE0NTcsXG4gIDkwMDogIzg4MGU0ZixcbiAgQTEwMDogI2ZmODBhYixcbiAgQTIwMDogI2ZmNDA4MSxcbiAgQTQwMDogI2Y1MDA1NyxcbiAgQTcwMDogI2M1MTE2MixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXB1cnBsZTogKFxuICA1MDogI2YzZTVmNSxcbiAgMTAwOiAjZTFiZWU3LFxuICAyMDA6ICNjZTkzZDgsXG4gIDMwMDogI2JhNjhjOCxcbiAgNDAwOiAjYWI0N2JjLFxuICA1MDA6ICM5YzI3YjAsXG4gIDYwMDogIzhlMjRhYSxcbiAgNzAwOiAjN2IxZmEyLFxuICA4MDA6ICM2YTFiOWEsXG4gIDkwMDogIzRhMTQ4YyxcbiAgQTEwMDogI2VhODBmYyxcbiAgQTIwMDogI2UwNDBmYixcbiAgQTQwMDogI2Q1MDBmOSxcbiAgQTcwMDogI2FhMDBmZixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtZGVlcC1wdXJwbGU6IChcbiAgNTA6ICNlZGU3ZjYsXG4gIDEwMDogI2QxYzRlOSxcbiAgMjAwOiAjYjM5ZGRiLFxuICAzMDA6ICM5NTc1Y2QsXG4gIDQwMDogIzdlNTdjMixcbiAgNTAwOiAjNjczYWI3LFxuICA2MDA6ICM1ZTM1YjEsXG4gIDcwMDogIzUxMmRhOCxcbiAgODAwOiAjNDUyN2EwLFxuICA5MDA6ICMzMTFiOTIsXG4gIEExMDA6ICNiMzg4ZmYsXG4gIEEyMDA6ICM3YzRkZmYsXG4gIEE0MDA6ICM2NTFmZmYsXG4gIEE3MDA6ICM2MjAwZWEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWluZGlnbzogKFxuICA1MDogI2U4ZWFmNixcbiAgMTAwOiAjYzVjYWU5LFxuICAyMDA6ICM5ZmE4ZGEsXG4gIDMwMDogIzc5ODZjYixcbiAgNDAwOiAjNWM2YmMwLFxuICA1MDA6ICMzZjUxYjUsXG4gIDYwMDogIzM5NDlhYixcbiAgNzAwOiAjMzAzZjlmLFxuICA4MDA6ICMyODM1OTMsXG4gIDkwMDogIzFhMjM3ZSxcbiAgQTEwMDogIzhjOWVmZixcbiAgQTIwMDogIzUzNmRmZSxcbiAgQTQwMDogIzNkNWFmZSxcbiAgQTcwMDogIzMwNGZmZSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYmx1ZTogKFxuICA1MDogI2UzZjJmZCxcbiAgMTAwOiAjYmJkZWZiLFxuICAyMDA6ICM5MGNhZjksXG4gIDMwMDogIzY0YjVmNixcbiAgNDAwOiAjNDJhNWY1LFxuICA1MDA6ICMyMTk2ZjMsXG4gIDYwMDogIzFlODhlNSxcbiAgNzAwOiAjMTk3NmQyLFxuICA4MDA6ICMxNTY1YzAsXG4gIDkwMDogIzBkNDdhMSxcbiAgQTEwMDogIzgyYjFmZixcbiAgQTIwMDogIzQ0OGFmZixcbiAgQTQwMDogIzI5NzlmZixcbiAgQTcwMDogIzI5NjJmZixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWxpZ2h0LWJsdWU6IChcbiAgNTA6ICNlMWY1ZmUsXG4gIDEwMDogI2IzZTVmYyxcbiAgMjAwOiAjODFkNGZhLFxuICAzMDA6ICM0ZmMzZjcsXG4gIDQwMDogIzI5YjZmNixcbiAgNTAwOiAjMDNhOWY0LFxuICA2MDA6ICMwMzliZTUsXG4gIDcwMDogIzAyODhkMSxcbiAgODAwOiAjMDI3N2JkLFxuICA5MDA6ICMwMTU3OWIsXG4gIEExMDA6ICM4MGQ4ZmYsXG4gIEEyMDA6ICM0MGM0ZmYsXG4gIEE0MDA6ICMwMGIwZmYsXG4gIEE3MDA6ICMwMDkxZWEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtY3lhbjogKFxuICA1MDogI2UwZjdmYSxcbiAgMTAwOiAjYjJlYmYyLFxuICAyMDA6ICM4MGRlZWEsXG4gIDMwMDogIzRkZDBlMSxcbiAgNDAwOiAjMjZjNmRhLFxuICA1MDA6ICMwMGJjZDQsXG4gIDYwMDogIzAwYWNjMSxcbiAgNzAwOiAjMDA5N2E3LFxuICA4MDA6ICMwMDgzOGYsXG4gIDkwMDogIzAwNjA2NCxcbiAgQTEwMDogIzg0ZmZmZixcbiAgQTIwMDogIzE4ZmZmZixcbiAgQTQwMDogIzAwZTVmZixcbiAgQTcwMDogIzAwYjhkNCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXRlYWw6IChcbiAgNTA6ICNlMGYyZjEsXG4gIDEwMDogI2IyZGZkYixcbiAgMjAwOiAjODBjYmM0LFxuICAzMDA6ICM0ZGI2YWMsXG4gIDQwMDogIzI2YTY5YSxcbiAgNTAwOiAjMDA5Njg4LFxuICA2MDA6ICMwMDg5N2IsXG4gIDcwMDogIzAwNzk2YixcbiAgODAwOiAjMDA2OTVjLFxuICA5MDA6ICMwMDRkNDAsXG4gIEExMDA6ICNhN2ZmZWIsXG4gIEEyMDA6ICM2NGZmZGEsXG4gIEE0MDA6ICMxZGU5YjYsXG4gIEE3MDA6ICMwMGJmYTUsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1ncmVlbjogKFxuICA1MDogI2U4ZjVlOSxcbiAgMTAwOiAjYzhlNmM5LFxuICAyMDA6ICNhNWQ2YTcsXG4gIDMwMDogIzgxYzc4NCxcbiAgNDAwOiAjNjZiYjZhLFxuICA1MDA6ICM0Y2FmNTAsXG4gIDYwMDogIzQzYTA0NyxcbiAgNzAwOiAjMzg4ZTNjLFxuICA4MDA6ICMyZTdkMzIsXG4gIDkwMDogIzFiNWUyMCxcbiAgQTEwMDogI2I5ZjZjYSxcbiAgQTIwMDogIzY5ZjBhZSxcbiAgQTQwMDogIzAwZTY3NixcbiAgQTcwMDogIzAwYzg1MyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGlnaHQtZ3JlZW46IChcbiAgNTA6ICNmMWY4ZTksXG4gIDEwMDogI2RjZWRjOCxcbiAgMjAwOiAjYzVlMWE1LFxuICAzMDA6ICNhZWQ1ODEsXG4gIDQwMDogIzljY2M2NSxcbiAgNTAwOiAjOGJjMzRhLFxuICA2MDA6ICM3Y2IzNDIsXG4gIDcwMDogIzY4OWYzOCxcbiAgODAwOiAjNTU4YjJmLFxuICA5MDA6ICMzMzY5MWUsXG4gIEExMDA6ICNjY2ZmOTAsXG4gIEEyMDA6ICNiMmZmNTksXG4gIEE0MDA6ICM3NmZmMDMsXG4gIEE3MDA6ICM2NGRkMTcsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGltZTogKFxuICA1MDogI2Y5ZmJlNyxcbiAgMTAwOiAjZjBmNGMzLFxuICAyMDA6ICNlNmVlOWMsXG4gIDMwMDogI2RjZTc3NSxcbiAgNDAwOiAjZDRlMTU3LFxuICA1MDA6ICNjZGRjMzksXG4gIDYwMDogI2MwY2EzMyxcbiAgNzAwOiAjYWZiNDJiLFxuICA4MDA6ICM5ZTlkMjQsXG4gIDkwMDogIzgyNzcxNyxcbiAgQTEwMDogI2Y0ZmY4MSxcbiAgQTIwMDogI2VlZmY0MSxcbiAgQTQwMDogI2M2ZmYwMCxcbiAgQTcwMDogI2FlZWEwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQteWVsbG93OiAoXG4gIDUwOiAjZmZmZGU3LFxuICAxMDA6ICNmZmY5YzQsXG4gIDIwMDogI2ZmZjU5ZCxcbiAgMzAwOiAjZmZmMTc2LFxuICA0MDA6ICNmZmVlNTgsXG4gIDUwMDogI2ZmZWIzYixcbiAgNjAwOiAjZmRkODM1LFxuICA3MDA6ICNmYmMwMmQsXG4gIDgwMDogI2Y5YTgyNSxcbiAgOTAwOiAjZjU3ZjE3LFxuICBBMTAwOiAjZmZmZjhkLFxuICBBMjAwOiAjZmZmZjAwLFxuICBBNDAwOiAjZmZlYTAwLFxuICBBNzAwOiAjZmZkNjAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWFtYmVyOiAoXG4gIDUwOiAjZmZmOGUxLFxuICAxMDA6ICNmZmVjYjMsXG4gIDIwMDogI2ZmZTA4MixcbiAgMzAwOiAjZmZkNTRmLFxuICA0MDA6ICNmZmNhMjgsXG4gIDUwMDogI2ZmYzEwNyxcbiAgNjAwOiAjZmZiMzAwLFxuICA3MDA6ICNmZmEwMDAsXG4gIDgwMDogI2ZmOGYwMCxcbiAgOTAwOiAjZmY2ZjAwLFxuICBBMTAwOiAjZmZlNTdmLFxuICBBMjAwOiAjZmZkNzQwLFxuICBBNDAwOiAjZmZjNDAwLFxuICBBNzAwOiAjZmZhYjAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LW9yYW5nZTogKFxuICA1MDogI2ZmZjNlMCxcbiAgMTAwOiAjZmZlMGIyLFxuICAyMDA6ICNmZmNjODAsXG4gIDMwMDogI2ZmYjc0ZCxcbiAgNDAwOiAjZmZhNzI2LFxuICA1MDA6ICNmZjk4MDAsXG4gIDYwMDogI2ZiOGMwMCxcbiAgNzAwOiAjZjU3YzAwLFxuICA4MDA6ICNlZjZjMDAsXG4gIDkwMDogI2U2NTEwMCxcbiAgQTEwMDogI2ZmZDE4MCxcbiAgQTIwMDogI2ZmYWI0MCxcbiAgQTQwMDogI2ZmOTEwMCxcbiAgQTcwMDogI2ZmNmQwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogYmxhY2ssXG4gIClcbik7XG5cbiRtYXQtZGVlcC1vcmFuZ2U6IChcbiAgNTA6ICNmYmU5ZTcsXG4gIDEwMDogI2ZmY2NiYyxcbiAgMjAwOiAjZmZhYjkxLFxuICAzMDA6ICNmZjhhNjUsXG4gIDQwMDogI2ZmNzA0MyxcbiAgNTAwOiAjZmY1NzIyLFxuICA2MDA6ICNmNDUxMWUsXG4gIDcwMDogI2U2NGExOSxcbiAgODAwOiAjZDg0MzE1LFxuICA5MDA6ICNiZjM2MGMsXG4gIEExMDA6ICNmZjllODAsXG4gIEEyMDA6ICNmZjZlNDAsXG4gIEE0MDA6ICNmZjNkMDAsXG4gIEE3MDA6ICNkZDJjMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWJyb3duOiAoXG4gIDUwOiAjZWZlYmU5LFxuICAxMDA6ICNkN2NjYzgsXG4gIDIwMDogI2JjYWFhNCxcbiAgMzAwOiAjYTE4ODdmLFxuICA0MDA6ICM4ZDZlNjMsXG4gIDUwMDogIzc5NTU0OCxcbiAgNjAwOiAjNmQ0YzQxLFxuICA3MDA6ICM1ZDQwMzcsXG4gIDgwMDogIzRlMzQyZSxcbiAgOTAwOiAjM2UyNzIzLFxuICBBMTAwOiAjZDdjY2M4LFxuICBBMjAwOiAjYmNhYWE0LFxuICBBNDAwOiAjOGQ2ZTYzLFxuICBBNzAwOiAjNWQ0MDM3LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWdyZXk6IChcbiAgNTA6ICNmYWZhZmEsXG4gIDEwMDogI2Y1ZjVmNSxcbiAgMjAwOiAjZWVlZWVlLFxuICAzMDA6ICNlMGUwZTAsXG4gIDQwMDogI2JkYmRiZCxcbiAgNTAwOiAjOWU5ZTllLFxuICA2MDA6ICM3NTc1NzUsXG4gIDcwMDogIzYxNjE2MSxcbiAgODAwOiAjNDI0MjQyLFxuICA5MDA6ICMyMTIxMjEsXG4gIEExMDA6ICNmZmZmZmYsXG4gIEEyMDA6ICNlZWVlZWUsXG4gIEE0MDA6ICNiZGJkYmQsXG4gIEE3MDA6ICM2MTYxNjEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuLy8gQWxpYXMgZm9yIGFsdGVybmF0ZSBzcGVsbGluZy5cbiRtYXQtZ3JheTogJG1hdC1ncmV5O1xuXG4kbWF0LWJsdWUtZ3JleTogKFxuICA1MDogI2VjZWZmMSxcbiAgMTAwOiAjY2ZkOGRjLFxuICAyMDA6ICNiMGJlYzUsXG4gIDMwMDogIzkwYTRhZSxcbiAgNDAwOiAjNzg5MDljLFxuICA1MDA6ICM2MDdkOGIsXG4gIDYwMDogIzU0NmU3YSxcbiAgNzAwOiAjNDU1YTY0LFxuICA4MDA6ICMzNzQ3NGYsXG4gIDkwMDogIzI2MzIzOCxcbiAgQTEwMDogI2NmZDhkYyxcbiAgQTIwMDogI2IwYmVjNSxcbiAgQTQwMDogIzc4OTA5YyxcbiAgQTcwMDogIzQ1NWE2NCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4vLyBBbGlhcyBmb3IgYWx0ZXJuYXRlIHNwZWxsaW5nLlxuJG1hdC1ibHVlLWdyYXk6ICRtYXQtYmx1ZS1ncmV5O1xuXG5cbi8vIEJhY2tncm91bmQgcGFsZXR0ZSBmb3IgbGlnaHQgdGhlbWVzLlxuJG1hdC1saWdodC10aGVtZS1iYWNrZ3JvdW5kOiAoXG4gIHN0YXR1cy1iYXI6IG1hcF9nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBhcHAtYmFyOiAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgMTAwKSxcbiAgYmFja2dyb3VuZDogbWFwX2dldCgkbWF0LWdyZXksIDUwKSxcbiAgaG92ZXI6ICAgICAgcmdiYShibGFjaywgMC4wNCksIC8vIFRPRE8oa2FyYSk6IGNoZWNrIHN0eWxlIHdpdGggTWF0ZXJpYWwgRGVzaWduIFVYXG4gIGNhcmQ6ICAgICAgIHdoaXRlLFxuICBkaWFsb2c6ICAgICB3aGl0ZSxcbiAgZGlzYWJsZWQtYnV0dG9uOiByZ2JhKGJsYWNrLCAwLjEyKSxcbiAgcmFpc2VkLWJ1dHRvbjogd2hpdGUsXG4gIGZvY3VzZWQtYnV0dG9uOiAkZGFyay1mb2N1c2VkLFxuICBzZWxlY3RlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBzZWxlY3RlZC1kaXNhYmxlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCA0MDApLFxuICBkaXNhYmxlZC1idXR0b24tdG9nZ2xlOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMjAwKSxcbiAgdW5zZWxlY3RlZC1jaGlwOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMzAwKSxcbiAgZGlzYWJsZWQtbGlzdC1vcHRpb246IG1hcF9nZXQoJG1hdC1ncmV5LCAyMDApLFxuKTtcblxuLy8gQmFja2dyb3VuZCBwYWxldHRlIGZvciBkYXJrIHRoZW1lcy5cbiRtYXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAoXG4gIHN0YXR1cy1iYXI6IGJsYWNrLFxuICBhcHAtYmFyOiAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgOTAwKSxcbiAgYmFja2dyb3VuZDogIzMwMzAzMCxcbiAgaG92ZXI6ICAgICAgcmdiYSh3aGl0ZSwgMC4wNCksIC8vIFRPRE8oa2FyYSk6IGNoZWNrIHN0eWxlIHdpdGggTWF0ZXJpYWwgRGVzaWduIFVYXG4gIGNhcmQ6ICAgICAgIG1hcF9nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaWFsb2c6ICAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uOiByZ2JhKHdoaXRlLCAwLjEyKSxcbiAgcmFpc2VkLWJ1dHRvbjogbWFwLWdldCgkbWF0LWdyZXksIDgwMCksXG4gIGZvY3VzZWQtYnV0dG9uOiAkbGlnaHQtZm9jdXNlZCxcbiAgc2VsZWN0ZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgOTAwKSxcbiAgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uLXRvZ2dsZTogYmxhY2ssXG4gIHVuc2VsZWN0ZWQtY2hpcDogbWFwX2dldCgkbWF0LWdyZXksIDcwMCksXG4gIGRpc2FibGVkLWxpc3Qtb3B0aW9uOiBibGFjayxcbik7XG5cbi8vIEZvcmVncm91bmQgcGFsZXR0ZSBmb3IgbGlnaHQgdGhlbWVzLlxuJG1hdC1saWdodC10aGVtZS1mb3JlZ3JvdW5kOiAoXG4gIGJhc2U6ICAgICAgICAgICAgICBibGFjayxcbiAgZGl2aWRlcjogICAgICAgICAgICRkYXJrLWRpdmlkZXJzLFxuICBkaXZpZGVyczogICAgICAgICAgJGRhcmstZGl2aWRlcnMsXG4gIGRpc2FibGVkOiAgICAgICAgICAkZGFyay1kaXNhYmxlZC10ZXh0LFxuICBkaXNhYmxlZC1idXR0b246ICAgcmdiYShibGFjaywgMC4yNiksXG4gIGRpc2FibGVkLXRleHQ6ICAgICAkZGFyay1kaXNhYmxlZC10ZXh0LFxuICBlbGV2YXRpb246ICAgICAgICAgYmxhY2ssXG4gIGhpbnQtdGV4dDogICAgICAgICAkZGFyay1kaXNhYmxlZC10ZXh0LFxuICBzZWNvbmRhcnktdGV4dDogICAgJGRhcmstc2Vjb25kYXJ5LXRleHQsXG4gIGljb246ICAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjU0KSxcbiAgaWNvbnM6ICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuNTQpLFxuICB0ZXh0OiAgICAgICAgICAgICAgcmdiYShibGFjaywgMC44NyksXG4gIHNsaWRlci1taW46ICAgICAgICByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgc2xpZGVyLW9mZjogICAgICAgIHJnYmEoYmxhY2ssIDAuMjYpLFxuICBzbGlkZXItb2ZmLWFjdGl2ZTogcmdiYShibGFjaywgMC4zOCksXG4pO1xuXG4vLyBGb3JlZ3JvdW5kIHBhbGV0dGUgZm9yIGRhcmsgdGhlbWVzLlxuJG1hdC1kYXJrLXRoZW1lLWZvcmVncm91bmQ6IChcbiAgYmFzZTogICAgICAgICAgICAgIHdoaXRlLFxuICBkaXZpZGVyOiAgICAgICAgICAgJGxpZ2h0LWRpdmlkZXJzLFxuICBkaXZpZGVyczogICAgICAgICAgJGxpZ2h0LWRpdmlkZXJzLFxuICBkaXNhYmxlZDogICAgICAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIGRpc2FibGVkLWJ1dHRvbjogICByZ2JhKHdoaXRlLCAwLjMpLFxuICBkaXNhYmxlZC10ZXh0OiAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIGVsZXZhdGlvbjogICAgICAgICBibGFjayxcbiAgaGludC10ZXh0OiAgICAgICAgICRsaWdodC1kaXNhYmxlZC10ZXh0LFxuICBzZWNvbmRhcnktdGV4dDogICAgJGxpZ2h0LXNlY29uZGFyeS10ZXh0LFxuICBpY29uOiAgICAgICAgICAgICAgd2hpdGUsXG4gIGljb25zOiAgICAgICAgICAgICB3aGl0ZSxcbiAgdGV4dDogICAgICAgICAgICAgIHdoaXRlLFxuICBzbGlkZXItbWluOiAgICAgICAgd2hpdGUsXG4gIHNsaWRlci1vZmY6ICAgICAgICByZ2JhKHdoaXRlLCAwLjMpLFxuICBzbGlkZXItb2ZmLWFjdGl2ZTogcmdiYSh3aGl0ZSwgMC4zKSxcbik7XG5cblxuXG4vLyBGb3IgYSBnaXZlbiBodWUgaW4gYSBwYWxldHRlLCByZXR1cm4gdGhlIGNvbnRyYXN0IGNvbG9yIGZyb20gdGhlIG1hcCBvZiBjb250cmFzdCBwYWxldHRlcy5cbi8vIEBwYXJhbSAkY29sb3ItbWFwXG4vLyBAcGFyYW0gJGh1ZVxuQGZ1bmN0aW9uIG1hdC1jb250cmFzdCgkcGFsZXR0ZSwgJGh1ZSkge1xuICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkcGFsZXR0ZSwgY29udHJhc3QpLCAkaHVlKTtcbn1cblxuXG4vLyBDcmVhdGVzIGEgbWFwIG9mIGh1ZXMgdG8gY29sb3JzIGZvciBhIHRoZW1lLiBUaGlzIGlzIHVzZWQgdG8gZGVmaW5lIGEgdGhlbWUgcGFsZXR0ZSBpbiB0ZXJtc1xuLy8gb2YgdGhlIE1hdGVyaWFsIERlc2lnbiBodWVzLlxuLy8gQHBhcmFtICRjb2xvci1tYXBcbi8vIEBwYXJhbSAkcHJpbWFyeVxuLy8gQHBhcmFtICRsaWdodGVyXG5AZnVuY3Rpb24gbWF0LXBhbGV0dGUoJGJhc2UtcGFsZXR0ZSwgJGRlZmF1bHQ6IDUwMCwgJGxpZ2h0ZXI6IDEwMCwgJGRhcmtlcjogNzAwKSB7XG4gICRyZXN1bHQ6IG1hcF9tZXJnZSgkYmFzZS1wYWxldHRlLCAoXG4gICAgZGVmYXVsdDogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdCksXG4gICAgbGlnaHRlcjogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkbGlnaHRlciksXG4gICAgZGFya2VyOiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICRkYXJrZXIpLFxuXG4gICAgZGVmYXVsdC1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRkZWZhdWx0KSxcbiAgICBsaWdodGVyLWNvbnRyYXN0OiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGxpZ2h0ZXIpLFxuICAgIGRhcmtlci1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRkYXJrZXIpXG4gICkpO1xuXG4gIC8vIEZvciBlYWNoIGh1ZSBpbiB0aGUgcGFsZXR0ZSwgYWRkIGEgXCItY29udHJhc3RcIiBjb2xvciB0byB0aGUgbWFwLlxuICBAZWFjaCAkaHVlLCAkY29sb3IgaW4gJGJhc2UtcGFsZXR0ZSB7XG4gICAgJHJlc3VsdDogbWFwX21lcmdlKCRyZXN1bHQsIChcbiAgICAgICcjeyRodWV9LWNvbnRyYXN0JzogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRodWUpXG4gICAgKSk7XG4gIH1cblxuICBAcmV0dXJuICRyZXN1bHQ7XG59XG5cblxuLy8gR2V0cyBhIGNvbG9yIGZyb20gYSB0aGVtZSBwYWxldHRlICh0aGUgb3V0cHV0IG9mIG1hdC1wYWxldHRlKS5cbi8vIFRoZSBodWUgY2FuIGJlIG9uZSBvZiB0aGUgc3RhbmRhcmQgdmFsdWVzICg1MDAsIEE0MDAsIGV0Yy4pLCBvbmUgb2YgdGhlIHRocmVlIHByZWNvbmZpZ3VyZWRcbi8vIGh1ZXMgKGRlZmF1bHQsIGxpZ2h0ZXIsIGRhcmtlciksIG9yIGFueSBvZiB0aGUgYWZvcmVtZW50aW9uZWQgcHJlZml4ZWQgd2l0aCBcIi1jb250cmFzdFwiLlxuLy9cbi8vIEBwYXJhbSAkY29sb3ItbWFwIFRoZSB0aGVtZSBwYWxldHRlIChvdXRwdXQgb2YgbWF0LXBhbGV0dGUpLlxuLy8gQHBhcmFtICRodWUgVGhlIGh1ZSBmcm9tIHRoZSBwYWxldHRlIHRvIHVzZS4gSWYgdGhpcyBpcyBhIHZhbHVlIGJldHdlZW4gMCBhbmQgMSwgaXQgd2lsbFxuLy8gICAgIGJlIHRyZWF0ZWQgYXMgb3BhY2l0eS5cbi8vIEBwYXJhbSAkb3BhY2l0eSBUaGUgYWxwaGEgY2hhbm5lbCB2YWx1ZSBmb3IgdGhlIGNvbG9yLlxuQGZ1bmN0aW9uIG1hdC1jb2xvcigkcGFsZXR0ZSwgJGh1ZTogZGVmYXVsdCwgJG9wYWNpdHk6IG51bGwpIHtcbiAgLy8gSWYgaHVlS2V5IGlzIGEgbnVtYmVyIGJldHdlZW4gemVybyBhbmQgb25lLCB0aGVuIGl0IGFjdHVhbGx5IGNvbnRhaW5zIGFuXG4gIC8vIG9wYWNpdHkgdmFsdWUsIHNvIHJlY2FsbCB0aGlzIGZ1bmN0aW9uIHdpdGggdGhlIGRlZmF1bHQgaHVlIGFuZCB0aGF0IGdpdmVuIG9wYWNpdHkuXG4gIEBpZiB0eXBlLW9mKCRodWUpID09IG51bWJlciBhbmQgJGh1ZSA+PSAwIGFuZCAkaHVlIDw9IDEge1xuICAgIEByZXR1cm4gbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LCAkaHVlKTtcbiAgfVxuXG4gICRjb2xvcjogbWFwLWdldCgkcGFsZXR0ZSwgJGh1ZSk7XG5cbiAgQGlmICh0eXBlLW9mKCRjb2xvcikgIT0gY29sb3IpIHtcbiAgICAvLyBJZiB0aGUgJGNvbG9yIHJlc29sdmVkIHRvIHNvbWV0aGluZyBkaWZmZXJlbnQgZnJvbSBhIGNvbG9yIChlLmcuIGEgQ1NTIHZhcmlhYmxlKSxcbiAgICAvLyB3ZSBjYW4ndCBhcHBseSB0aGUgb3BhY2l0eSBhbnl3YXkgc28gd2UgcmV0dXJuIHRoZSB2YWx1ZSBhcyBpcywgb3RoZXJ3aXNlIFNhc3MgY2FuXG4gICAgLy8gdGhyb3cgYW4gZXJyb3Igb3Igb3V0cHV0IHNvbWV0aGluZyBpbnZhbGlkLlxuICAgIEByZXR1cm4gJGNvbG9yO1xuICB9XG5cbiAgQHJldHVybiByZ2JhKCRjb2xvciwgaWYoJG9wYWNpdHkgPT0gbnVsbCwgb3BhY2l0eSgkY29sb3IpLCAkb3BhY2l0eSkpO1xufVxuXG5cbi8vIENyZWF0ZXMgYSBjb250YWluZXIgb2JqZWN0IGZvciBhIGxpZ2h0IHRoZW1lIHRvIGJlIGdpdmVuIHRvIGluZGl2aWR1YWwgY29tcG9uZW50IHRoZW1lIG1peGlucy5cbkBmdW5jdGlvbiBtYXQtbGlnaHQtdGhlbWUoJHByaW1hcnksICRhY2NlbnQsICR3YXJuOiBtYXQtcGFsZXR0ZSgkbWF0LXJlZCkpIHtcbiAgQHJldHVybiAoXG4gICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgYWNjZW50OiAkYWNjZW50LFxuICAgIHdhcm46ICR3YXJuLFxuICAgIGlzLWRhcms6IGZhbHNlLFxuICAgIGZvcmVncm91bmQ6ICRtYXQtbGlnaHQtdGhlbWUtZm9yZWdyb3VuZCxcbiAgICBiYWNrZ3JvdW5kOiAkbWF0LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQsXG4gICk7XG59XG5cblxuLy8gQ3JlYXRlcyBhIGNvbnRhaW5lciBvYmplY3QgZm9yIGEgZGFyayB0aGVtZSB0byBiZSBnaXZlbiB0byBpbmRpdmlkdWFsIGNvbXBvbmVudCB0aGVtZSBtaXhpbnMuXG5AZnVuY3Rpb24gbWF0LWRhcmstdGhlbWUoJHByaW1hcnksICRhY2NlbnQsICR3YXJuOiBtYXQtcGFsZXR0ZSgkbWF0LXJlZCkpIHtcbiAgQHJldHVybiAoXG4gICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgYWNjZW50OiAkYWNjZW50LFxuICAgIHdhcm46ICR3YXJuLFxuICAgIGlzLWRhcms6IHRydWUsXG4gICAgZm9yZWdyb3VuZDogJG1hdC1kYXJrLXRoZW1lLWZvcmVncm91bmQsXG4gICAgYmFja2dyb3VuZDogJG1hdC1kYXJrLXRoZW1lLWJhY2tncm91bmQsXG4gICk7XG59XG5cblxuXG4kbWF0LXJpcHBsZS1jb2xvci1vcGFjaXR5OiAwLjE7XG5cbkBtaXhpbiBtYXQtcmlwcGxlKCkge1xuXG4gIC8vIFRoZSBob3N0IGVsZW1lbnQgb2YgYW4gbWF0LXJpcHBsZSBkaXJlY3RpdmUgc2hvdWxkIGFsd2F5cyBoYXZlIGEgcG9zaXRpb24gb2YgXCJhYnNvbHV0ZVwiIG9yXG4gIC8vIFwicmVsYXRpdmVcIiBzbyB0aGF0IHRoZSByaXBwbGVzIGluc2lkZSBhcmUgY29ycmVjdGx5IHBvc2l0aW9uZWQgcmVsYXRpdmVseSB0byB0aGUgY29udGFpbmVyLlxuICAubWF0LXJpcHBsZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC8vIEJ5IGRlZmF1bHQsIGV2ZXJ5IHJpcHBsZSBjb250YWluZXIgc2hvdWxkIGhhdmUgcG9zaXRpb246IHJlbGF0aXZlIGluIGZhdm9yIG9mIGNyZWF0aW5nIGFuXG4gICAgLy8gZWFzeSBBUEkgZm9yIGRldmVsb3BlcnMgdXNpbmcgdGhlIE1hdFJpcHBsZSBkaXJlY3RpdmUuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLm1hdC1yaXBwbGUubWF0LXJpcHBsZS11bmJvdW5kZWQge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgIHRyYW5zaXRpb246IG9wYWNpdHksIHRyYW5zZm9ybSAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcblxuICAgIC8vIEluIGhpZ2ggY29udHJhc3QgbW9kZSB0aGUgcmlwcGxlIGlzIG9wYXF1ZSwgY2F1c2luZyBpdCB0byBvYnN0cnVjdCB0aGUgY29udGVudC5cbiAgICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4vKiBUaGVtZSBmb3IgdGhlIHJpcHBsZSBlbGVtZW50cy4qL1xuQG1peGluIG1hdC1yaXBwbGUtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXBfZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRmb3JlZ3JvdW5kLWJhc2U6IG1hcF9nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIC8vIElmIHRoZSByaXBwbGUgY29sb3IgaXMgcmVzb2x2ZXMgdG8gYSBjb2xvciAqdHlwZSosIHdlIGNhbiB1c2UgaXQgZGlyZWN0bHksIG90aGVyd2lzZVxuICAgIC8vIChlLmcuIGl0IHJlc29sdmVzIHRvIGEgQ1NTIHZhcmlhYmxlKSB3ZSBmYWxsIGJhY2sgdG8gdXNpbmcgdGhlIGNvbG9yIGFuZCBzZXR0aW5nIGFuIG9wYWNpdHkuXG4gICAgQGlmICh0eXBlLW9mKCRmb3JlZ3JvdW5kLWJhc2UpID09IGNvbG9yKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRmb3JlZ3JvdW5kLWJhc2UsICRtYXQtcmlwcGxlLWNvbG9yLW9wYWNpdHkpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9yZWdyb3VuZC1iYXNlO1xuICAgICAgb3BhY2l0eTogJG1hdC1yaXBwbGUtY29sb3Itb3BhY2l0eTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFV0aWxpdHkgZm9yIGZldGNoaW5nIGEgbmVzdGVkIHZhbHVlIGZyb20gYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgJG5hbWUpIHtcbiAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJGNvbmZpZywgJGxldmVsKSwgJG5hbWUpO1xufVxuXG4vLyBHZXRzIHRoZSBmb250IHNpemUgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgZm9udC1zaXplKTtcbn1cblxuLy8gR2V0cyB0aGUgbGluZSBoZWlnaHQgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBsaW5lLWhlaWdodCk7XG59XG5cbi8vIEdldHMgdGhlIGZvbnQgd2VpZ2h0IGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1mb250LXdlaWdodCgkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgZm9udC13ZWlnaHQpO1xufVxuXG4vLyBHZXRzIHRoZSBsZXR0ZXIgc3BhY2luZyBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtbGV0dGVyLXNwYWNpbmcoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGxldHRlci1zcGFjaW5nKTtcbn1cblxuLy8gR2V0cyB0aGUgZm9udC1mYW1pbHkgZnJvbSBhIHR5cG9ncmFwaHkgY29uZmlnIGFuZCByZW1vdmVzIHRoZSBxdW90ZXMgYXJvdW5kIGl0LlxuQGZ1bmN0aW9uIG1hdC1mb250LWZhbWlseSgkY29uZmlnLCAkbGV2ZWw6IG51bGwpIHtcbiAgJGZvbnQtZmFtaWx5OiBtYXAtZ2V0KCRjb25maWcsIGZvbnQtZmFtaWx5KTtcblxuICBAaWYgJGxldmVsICE9IG51bGwge1xuICAgICRmb250LWZhbWlseTogX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGZvbnQtZmFtaWx5KTtcbiAgfVxuXG4gIC8vIEd1YXJkIGFnYWluc3QgdW5xdW90aW5nIG5vbi1zdHJpbmcgdmFsdWVzLCBiZWNhdXNlIGl0J3MgZGVwcmVjYXRlZC5cbiAgQHJldHVybiBpZih0eXBlLW9mKCRmb250LWZhbWlseSkgPT0gc3RyaW5nLCB1bnF1b3RlKCRmb250LWZhbWlseSksICRmb250LWZhbWlseSk7XG59XG5cbi8vIE91dHB1dHMgdGhlIHNob3J0aGFuZCBgZm9udGAgQ1NTIHByb3BlcnR5LCBiYXNlZCBvbiBhIHNldCBvZiB0eXBvZ3JhcGh5IHZhbHVlcy4gRmFsbHMgYmFjayB0b1xuLy8gdGhlIGluZGl2aWR1YWwgcHJvcGVydGllcyBpZiBhIHZhbHVlIHRoYXQgaXNuJ3QgYWxsb3dlZCBpbiB0aGUgc2hvcnRoYW5kIGlzIHBhc3NlZCBpbi5cbkBtaXhpbiBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZCgkZm9udC1zaXplLCAkZm9udC13ZWlnaHQsICRsaW5lLWhlaWdodCwgJGZvbnQtZmFtaWx5KSB7XG4gIC8vIElmIGFueSBvZiB0aGUgdmFsdWVzIGFyZSBzZXQgdG8gYGluaGVyaXRgLCB3ZSBjYW4ndCB1c2UgdGhlIHNob3J0aGFuZFxuICAvLyBzbyB3ZSBmYWxsIGJhY2sgdG8gcGFzc2luZyBpbiB0aGUgaW5kaXZpZHVhbCBwcm9wZXJ0aWVzLlxuICBAaWYgKCRmb250LXNpemUgPT0gaW5oZXJpdCBvclxuICAgICAgICRmb250LXdlaWdodCA9PSBpbmhlcml0IG9yXG4gICAgICAgJGxpbmUtaGVpZ2h0ID09IGluaGVyaXQgb3JcbiAgICAgICAkZm9udC1mYW1pbHkgPT0gaW5oZXJpdCBvclxuICAgICAgICRmb250LXNpemUgPT0gbnVsbCBvclxuICAgICAgICRmb250LXdlaWdodCA9PSBudWxsIG9yXG4gICAgICAgJGxpbmUtaGVpZ2h0ID09IG51bGwgb3JcbiAgICAgICAkZm9udC1mYW1pbHkgPT0gbnVsbCkge1xuXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG4gIEBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UgdXNlIHRoZSBzaG9ydGhhbmQgYGZvbnRgLCBiZWNhdXNlIGl0J3MgdGhlIGxlYXN0IGFtb3VudCBvZiBieXRlcy4gTm90ZVxuICAgIC8vIHRoYXQgd2UgbmVlZCB0byB1c2UgaW50ZXJwb2xhdGlvbiBmb3IgYGZvbnQtc2l6ZS9saW5lLWhlaWdodGAgaW4gb3JkZXIgdG8gcHJldmVudFxuICAgIC8vIFNhc3MgZnJvbSBkaXZpZGluZyB0aGUgdHdvIHZhbHVlcy5cbiAgICBmb250OiAkZm9udC13ZWlnaHQgI3skZm9udC1zaXplfS8jeyRsaW5lLWhlaWdodH0gJGZvbnQtZmFtaWx5O1xuICB9XG59XG5cbi8vIENvbnZlcnRzIGEgdHlwb2dyYXBoeSBsZXZlbCBpbnRvIENTUyBzdHlsZXMuXG5AbWl4aW4gbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsICRsZXZlbCkge1xuICAkZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsICRsZXZlbCk7XG4gICRmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsICRsZXZlbCk7XG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsICRsZXZlbCk7XG4gICRmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsICRsZXZlbCk7XG5cbiAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoJGZvbnQtc2l6ZSwgJGZvbnQtd2VpZ2h0LCAkbGluZS1oZWlnaHQsICRmb250LWZhbWlseSk7XG4gIGxldHRlci1zcGFjaW5nOiBtYXQtbGV0dGVyLXNwYWNpbmcoJGNvbmZpZywgJGxldmVsKTtcbn1cblxuXG5AbWl4aW4gbWF0LW9wdGlvbi10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1vcHRpb24ge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJjpob3Zlcjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpLFxuICAgICY6Zm9jdXM6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG5cbiAgICAvLyBJbiBtdWx0aXBsZSBtb2RlIHRoZXJlIGlzIGEgY2hlY2tib3ggdG8gc2hvdyB0aGF0IHRoZSBvcHRpb24gaXMgc2VsZWN0ZWQuXG4gICAgJi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKTpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgICYubWF0LWFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgICYubWF0LW9wdGlvbi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHJpbWFyeSAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gIH1cblxuICAubWF0LWFjY2VudCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgfVxuXG4gIC5tYXQtd2FybiAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gIH1cbn1cblxuQG1peGluIG1hdC1vcHRpb24tdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtb3B0aW9uIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LW9wdGdyb3VwLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtb3B0Z3JvdXAtZGlzYWJsZWQgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LW9wdGdyb3VwLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxufVxuXG5cblxuQG1peGluIG1hdC1wc2V1ZG8tY2hlY2tib3gtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC8vIE5PVEUodHJhdmlza2F1Zm1hbik6IFdoaWxlIHRoZSBzcGVjIGNhbGxzIGZvciB0cmFuc2x1Y2VudCBibGFja3Mvd2hpdGVzIGZvciBkaXNhYmxlZCBjb2xvcnMsXG4gIC8vIHRoaXMgZG9lcyBub3Qgd29yayB3ZWxsIHdpdGggZWxlbWVudHMgbGF5ZXJlZCBvbiB0b3Agb2Ygb25lIGFub3RoZXIuIFRvIGdldCBhcm91bmQgdGhpcyB3ZVxuICAvLyBibGVuZCB0aGUgY29sb3JzIHRvZ2V0aGVyIGJhc2VkIG9uIHRoZSBiYXNlIGNvbG9yIGFuZCB0aGUgdGhlbWUgYmFja2dyb3VuZC5cbiAgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyazogIzY4Njg2ODtcbiAgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQ6ICNiMGIwYjA7XG4gICRkaXNhYmxlZC1jb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcmssICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0KTtcbiAgJGNvbG9yZWQtYm94LXNlbGVjdG9yOiAnLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSc7XG5cbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gge1xuICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpLCBzZWNvbmRhcnktdGV4dCk7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZCB7XG4gICAgY29sb3I6ICRkaXNhYmxlZC1jb2xvcjtcbiAgfVxuXG4gIC8vIERlZmF1bHQgdG8gdGhlIGFjY2VudCBjb2xvci4gTm90ZSB0aGF0IHRoZSBwc2V1ZG8gY2hlY2tib3hlcyBhcmUgbWVhbnQgdG8gaW5oZXJpdCB0aGVcbiAgLy8gdGhlbWUgZnJvbSB0aGVpciBwYXJlbnQsIHJhdGhlciB0aGFuIGltcGxlbWVudGluZyB0aGVpciBvd24gdGhlbWluZywgd2hpY2ggaXMgd2h5IHdlXG4gIC8vIGRvbid0IGF0dGFjaCB0byB0aGUgYG1hdC0qYCBjbGFzc2VzLlxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIGFjY2VudCkpO1xuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHByaW1hcnkpKTtcbiAgfVxuXG4gIC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCB3YXJuKSk7XG4gIH1cblxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICAmLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZDogJGRpc2FibGVkLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gUmVwcmVzZW50cyBhIHR5cG9ncmFwaHkgbGV2ZWwgZnJvbSB0aGUgTWF0ZXJpYWwgZGVzaWduIHNwZWMuXG5AZnVuY3Rpb24gbWF0LXR5cG9ncmFwaHktbGV2ZWwoXG4gICRmb250LXNpemUsXG4gICRsaW5lLWhlaWdodDogJGZvbnQtc2l6ZSxcbiAgJGZvbnQtd2VpZ2h0OiA0MDAsXG4gICRmb250LWZhbWlseTogbnVsbCxcbiAgJGxldHRlci1zcGFjaW5nOiBudWxsKSB7XG5cbiAgQHJldHVybiAoXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLFxuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQsXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodCxcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LFxuICAgIGxldHRlci1zcGFjaW5nOiAkbGV0dGVyLXNwYWNpbmdcbiAgKTtcbn1cblxuLy8gUmVwcmVzZW50cyBhIGNvbGxlY3Rpb24gb2YgdHlwb2dyYXBoeSBsZXZlbHMuXG4vLyBEZWZhdWx0cyBjb21lIGZyb20gaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL3N0eWxlL3R5cG9ncmFwaHkuaHRtbFxuQGZ1bmN0aW9uIG1hdC10eXBvZ3JhcGh5LWNvbmZpZyhcbiAgJGZvbnQtZmFtaWx5OiAgICdSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZicsXG4gICRkaXNwbGF5LTQ6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxMTJweCwgMTEycHgsIDMwMCksXG4gICRkaXNwbGF5LTM6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCg1NnB4LCA1NnB4LCA0MDApLFxuICAkZGlzcGxheS0yOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoNDVweCwgNDhweCwgNDAwKSxcbiAgJGRpc3BsYXktMTogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDM0cHgsIDQwcHgsIDQwMCksXG4gICRoZWFkbGluZTogICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgyNHB4LCAzMnB4LCA0MDApLFxuICAkdGl0bGU6ICAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMjBweCwgMzJweCwgNTAwKSxcbiAgJHN1YmhlYWRpbmctMjogIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE2cHgsIDI4cHgsIDQwMCksXG4gICRzdWJoZWFkaW5nLTE6ICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNXB4LCAyNHB4LCA0MDApLFxuICAkYm9keS0yOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMjRweCwgNTAwKSxcbiAgJGJvZHktMTogICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE0cHgsIDIwcHgsIDQwMCksXG4gICRjYXB0aW9uOiAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxMnB4LCAyMHB4LCA0MDApLFxuICAkYnV0dG9uOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMTRweCwgNTAwKSxcbiAgLy8gTGluZS1oZWlnaHQgbXVzdCBiZSB1bml0LWxlc3MgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZS5cbiAgJGlucHV0OiAgICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKGluaGVyaXQsIDEuMTI1LCA0MDApXG4pIHtcblxuICAvLyBEZWNsYXJlIGFuIGluaXRpYWwgbWFwIHdpdGggYWxsIG9mIHRoZSBsZXZlbHMuXG4gICRjb25maWc6IChcbiAgICBkaXNwbGF5LTQ6ICAgICAgJGRpc3BsYXktNCxcbiAgICBkaXNwbGF5LTM6ICAgICAgJGRpc3BsYXktMyxcbiAgICBkaXNwbGF5LTI6ICAgICAgJGRpc3BsYXktMixcbiAgICBkaXNwbGF5LTE6ICAgICAgJGRpc3BsYXktMSxcbiAgICBoZWFkbGluZTogICAgICAgJGhlYWRsaW5lLFxuICAgIHRpdGxlOiAgICAgICAgICAkdGl0bGUsXG4gICAgc3ViaGVhZGluZy0yOiAgICRzdWJoZWFkaW5nLTIsXG4gICAgc3ViaGVhZGluZy0xOiAgICRzdWJoZWFkaW5nLTEsXG4gICAgYm9keS0yOiAgICAgICAgICRib2R5LTIsXG4gICAgYm9keS0xOiAgICAgICAgICRib2R5LTEsXG4gICAgY2FwdGlvbjogICAgICAgICRjYXB0aW9uLFxuICAgIGJ1dHRvbjogICAgICAgICAkYnV0dG9uLFxuICAgIGlucHV0OiAgICAgICAgICAkaW5wdXQsXG4gICk7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBsZXZlbHMgYW5kIHNldCB0aGUgYGZvbnQtZmFtaWx5YCBvZiB0aGUgb25lcyB0aGF0IGRvbid0IGhhdmUgb25lIHRvIHRoZSBiYXNlLlxuICAvLyBOb3RlIHRoYXQgU2FzcyBjYW4ndCBtb2RpZnkgbWFwcyBpbiBwbGFjZSwgd2hpY2ggbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIG1lcmdlIGFuZCByZS1hc3NpZ24uXG4gIEBlYWNoICRrZXksICRsZXZlbCBpbiAkY29uZmlnIHtcbiAgICBAaWYgbWFwLWdldCgkbGV2ZWwsIGZvbnQtZmFtaWx5KSA9PSBudWxsIHtcbiAgICAgICRuZXctbGV2ZWw6IG1hcC1tZXJnZSgkbGV2ZWwsIChmb250LWZhbWlseTogJGZvbnQtZmFtaWx5KSk7XG4gICAgICAkY29uZmlnOiBtYXAtbWVyZ2UoJGNvbmZpZywgKCRrZXk6ICRuZXctbGV2ZWwpKTtcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgdGhlIGJhc2UgZm9udCBmYW1pbHkgdG8gdGhlIGNvbmZpZy5cbiAgQHJldHVybiBtYXAtbWVyZ2UoJGNvbmZpZywgKGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHkpKTtcbn1cblxuLy8gQWRkcyB0aGUgYmFzZSB0eXBvZ3JhcGh5IHN0eWxlcywgYmFzZWQgb24gYSBjb25maWcuXG5AbWl4aW4gbWF0LWJhc2UtdHlwb2dyYXBoeSgkY29uZmlnLCAkc2VsZWN0b3I6ICcubWF0LXR5cG9ncmFwaHknKSB7XG4gIC5tYXQtaDEsIC5tYXQtaGVhZGxpbmUsICN7JHNlbGVjdG9yfSBoMSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGhlYWRsaW5lKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oMiwgLm1hdC10aXRsZSwgI3skc2VsZWN0b3J9IGgyIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgdGl0bGUpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWgzLCAubWF0LXN1YmhlYWRpbmctMiwgI3skc2VsZWN0b3J9IGgzIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oNCwgLm1hdC1zdWJoZWFkaW5nLTEsICN7JHNlbGVjdG9yfSBoNCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC8vIE5vdGU6IHRoZSBzcGVjIGRvZXNuJ3QgaGF2ZSBhbnl0aGluZyB0aGF0IHdvdWxkIGNvcnJlc3BvbmQgdG8gaDUgYW5kIGg2LCBidXQgd2UgYWRkIHRoZXNlIGZvclxuICAvLyBjb25zaXN0ZW5jeS4gVGhlIGZvbnQgc2l6ZXMgY29tZSBmcm9tIHRoZSBDaHJvbWUgdXNlciBhZ2VudCBzdHlsZXMgd2hpY2ggaGF2ZSBoNSBhdCAwLjgzZW1cbiAgLy8gYW5kIGg2IGF0IDAuNjdlbS5cbiAgLm1hdC1oNSwgI3skc2VsZWN0b3J9IGg1IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZChcbiAgICAgIG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSAqIDAuODMsXG4gICAgICBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSlcbiAgICApO1xuXG4gICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgfVxuXG4gIC5tYXQtaDYsICN7JHNlbGVjdG9yfSBoNiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoXG4gICAgICBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkgKiAwLjY3LFxuICAgICAgbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpXG4gICAgKTtcblxuICAgIG1hcmdpbjogMCAwIDEycHg7XG4gIH1cblxuICAubWF0LWJvZHktc3Ryb25nLCAubWF0LWJvZHktMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LWJvZHksIC5tYXQtYm9keS0xLCAjeyRzZWxlY3Rvcn0ge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDAgMCAxMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc21hbGwsIC5tYXQtY2FwdGlvbiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGNhcHRpb24pO1xuICB9XG5cbiAgLy8gTm90ZTogVGhlIHNwZWMgZG9lc24ndCBtZW50aW9uIGxldHRlciBzcGFjaW5nLiBUaGUgdmFsdWUgY29tZXMgZnJvbVxuICAvLyBleWViYWxsaW5nIGl0IHVudGlsIGl0IGxvb2tlZCBleGFjdGx5IGxpa2UgdGhlIHNwZWMgZXhhbXBsZXMuXG4gIC5tYXQtZGlzcGxheS00LCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTQpO1xuICAgIG1hcmdpbjogMCAwIDU2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1ZW07XG4gIH1cblxuICAubWF0LWRpc3BsYXktMywgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0zIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0zKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTIsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktMik7XG4gICAgbWFyZ2luOiAwIDAgNjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDA1ZW07XG4gIH1cblxuICAubWF0LWRpc3BsYXktMSwgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0xIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0xKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICB9XG59XG5cblxuXG5cbkBtaXhpbiBtYXQtYXV0b2NvbXBsZXRlLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAvLyBTZWxlY3RlZCBvcHRpb25zIGluIGF1dG9jb21wbGV0ZXMgc2hvdWxkIG5vdCBiZSBncmF5LCBidXQgd2VcbiAgICAvLyBvbmx5IHdhbnQgdG8gb3ZlcnJpZGUgdGhlIGJhY2tncm91bmQgZm9yIHNlbGVjdGVkIG9wdGlvbnMgaWZcbiAgICAvLyB0aGV5IGFyZSAqbm90KiBpbiBob3ZlciBvciBmb2N1cyBzdGF0ZS4gVGhpcyBjaGFuZ2UgaGFzIHRvIGJlXG4gICAgLy8gbWFkZSBoZXJlIGJlY2F1c2UgYmFzZSBvcHRpb24gc3R5bGVzIGFyZSBzaGFyZWQgYmV0d2VlbiB0aGVcbiAgICAvLyBhdXRvY29tcGxldGUgYW5kIHRoZSBzZWxlY3QuXG4gICAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcikge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcblxuICAgICAgJjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuQG1peGluIG1hdC1hdXRvY29tcGxldGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuLy8gVGhpcyBjb250YWlucyBhbGwgb2YgdGhlIHN0eWxlcyBmb3IgdGhlIGJhZGdlXG4vLyByYXRoZXIgdGhhbiBqdXN0IHRoZSBjb2xvci90aGVtZSBiZWNhdXNlIG9mXG4vLyBubyBzdHlsZSBzaGVldCBzdXBwb3J0IGZvciBkaXJlY3RpdmVzLlxuXG5cblxuXG5cbiRtYXQtYmFkZ2UtZm9udC1zaXplOiAxMnB4O1xuJG1hdC1iYWRnZS1mb250LXdlaWdodDogNjAwO1xuJG1hdC1iYWRnZS1kZWZhdWx0LXNpemU6IDIycHggIWRlZmF1bHQ7XG4kbWF0LWJhZGdlLXNtYWxsLXNpemU6ICRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplIC0gNjtcbiRtYXQtYmFkZ2UtbGFyZ2Utc2l6ZTogJG1hdC1iYWRnZS1kZWZhdWx0LXNpemUgKyA2O1xuXG4vLyBNaXhpbiBmb3IgYnVpbGRpbmcgb2Zmc2V0IGdpdmVuIGRpZmZlcmVudCBzaXplc1xuQG1peGluIF9tYXQtYmFkZ2Utc2l6ZSgkc2l6ZSkge1xuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcbiAgfVxuXG4gICYubWF0LWJhZGdlLWFib3ZlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgdG9wOiAtJHNpemUgLyAyO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWJlbG93IHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgYm90dG9tOiAtJHNpemUgLyAyO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGxlZnQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgICAgcmlnaHQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHJpZ2h0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICByaWdodDogYXV0bztcbiAgICAgIGxlZnQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1vdmVybGFwIHtcbiAgICAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgbGVmdDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgcmlnaHQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgcmlnaHQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYmFkZ2UtdGhlbWUoJHRoZW1lKSB7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwcmltYXJ5KTtcblxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0IHtcbiAgICAgIG91dGxpbmU6IHNvbGlkIDFweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1hY2NlbnQge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2Utd2FybiB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAubWF0LWJhZGdlLWhpZGRlbiB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1kaXNhYmxlZCB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICRhcHAtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnYmFja2dyb3VuZCcpO1xuICAgICAgJGJhZGdlLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG5cbiAgICAgIC8vIFRoZSBkaXNhYmxlZCBjb2xvciB1c3VhbGx5IGhhcyBzb21lIGtpbmQgb2Ygb3BhY2l0eSwgYnV0IGJlY2F1c2UgdGhlIGJhZGdlIGlzIG92ZXJsYXllZFxuICAgICAgLy8gb24gdG9wIG9mIHNvbWV0aGluZyBlbHNlLCBpdCB3b24ndCBsb29rIGdvb2QgaWYgaXQncyBvcGFxdWUuIElmIGl0IGlzIGEgY29sb3IgKnR5cGUqLFxuICAgICAgLy8gd2UgY29udmVydCBpdCBpbnRvIGEgc29saWQgY29sb3IgYnkgdGFraW5nIHRoZSBvcGFjaXR5IGZyb20gdGhlIHJnYmEgdmFsdWUgYW5kIHVzaW5nXG4gICAgICAvLyB0aGUgdmFsdWUgdG8gZGV0ZXJtaW5lIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBiYWNrZ3JvdW5kIHRvIHB1dCBpbnRvIGZvcmVncm91bmQgd2hlblxuICAgICAgLy8gbWl4aW5nIHRoZSBjb2xvcnMgdG9nZXRoZXIuXG4gICAgICBAaWYgKHR5cGUtb2YoJGJhZGdlLWNvbG9yKSA9PSBjb2xvciBhbmQgdHlwZS1vZigkYXBwLWJhY2tncm91bmQpID09IGNvbG9yKSB7XG4gICAgICAgICRiYWRnZS1vcGFjaXR5OiBvcGFjaXR5KCRiYWRnZS1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQ6IG1peCgkYXBwLWJhY2tncm91bmQsIHJnYmEoJGJhZGdlLWNvbG9yLCAxKSwgKDEgLSAkYmFkZ2Utb3BhY2l0eSkgKiAxMDAlKTtcbiAgICAgIH1cbiAgICAgIEBlbHNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogJGJhZGdlLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC8vIFRoZSBhY3RpdmUgY2xhc3MgaXMgYWRkZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaXMgYWRkZWRcbiAgLy8gc28gaXQgY2FuIGFuaW1hdGUgc2NhbGUgdG8gZGVmYXVsdFxuICAubWF0LWJhZGdlLWNvbnRlbnQubWF0LWJhZGdlLWFjdGl2ZSB7XG4gICAgLy8gU2NhbGUgdG8gYG5vbmVgIGluc3RlYWQgb2YgYDFgIHRvIGF2b2lkIGJsdXJyeSB0ZXh0IGluIHNvbWUgYnJvd3NlcnMuXG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1zbWFsbCB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2Utc21hbGwtc2l6ZSk7XG4gIH1cbiAgLm1hdC1iYWRnZS1tZWRpdW0ge1xuICAgIEBpbmNsdWRlIF9tYXQtYmFkZ2Utc2l6ZSgkbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZSk7XG4gIH1cbiAgLm1hdC1iYWRnZS1sYXJnZSB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2UtbGFyZ2Utc2l6ZSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1iYWRnZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBmb250LXdlaWdodDogJG1hdC1iYWRnZS1mb250LXdlaWdodDtcbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplO1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZSAvIDI7XG4gIH1cblxuICAubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZSAqIDI7XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LWJvdHRvbS1zaGVldC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDE2LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJvdHRvbS1zaGVldC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG5cbiRfbWF0LWJ1dHRvbi1yaXBwbGUtb3BhY2l0eTogMC4xO1xuXG4vLyBBcHBsaWVzIGEgZm9jdXMgc3R5bGUgdG8gYW4gbWF0LWJ1dHRvbiBlbGVtZW50IGZvciBlYWNoIG9mIHRoZSBzdXBwb3J0ZWQgcGFsZXR0ZXMuXG5AbWl4aW4gX21hdC1idXR0b24tZm9jdXMtb3ZlcmxheS1jb2xvcigkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgJi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICB9XG5cbiAgJi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgfVxuXG4gICYubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgfVxuXG4gICZbZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LWJ1dHRvbi1yaXBwbGUtY29sb3IoJHRoZW1lLCAkaHVlLCAkb3BhY2l0eTogJF9tYXQtYnV0dG9uLXJpcHBsZS1vcGFjaXR5KSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gICYubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cblxuICAmLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsICRodWUsICRvcGFjaXR5KTtcbiAgfVxuXG4gICYubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuLCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cbn1cblxuLy8gQXBwbGllcyBhIHByb3BlcnR5IHRvIGFuIG1hdC1idXR0b24gZWxlbWVudCBmb3IgZWFjaCBvZiB0aGUgc3VwcG9ydGVkIHBhbGV0dGVzLlxuQG1peGluIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJHByb3BlcnR5LCAkaHVlKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICYubWF0LXByaW1hcnkge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRwcmltYXJ5LCAkaHVlKTtcbiAgfVxuICAmLm1hdC1hY2NlbnQge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRhY2NlbnQsICRodWUpO1xuICB9XG4gICYubWF0LXdhcm4ge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCR3YXJuLCAkaHVlKTtcbiAgfVxuXG4gICYubWF0LXByaW1hcnksICYubWF0LWFjY2VudCwgJi5tYXQtd2FybiwgJltkaXNhYmxlZF0ge1xuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICRwYWxldHRlOiBpZigkcHJvcGVydHkgPT0gJ2NvbG9yJywgJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKTtcbiAgICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRwYWxldHRlLCBkaXNhYmxlZC1idXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICAgIC8vIEJ1dHRvbnMgd2l0aG91dCBhIGJhY2tncm91bmQgY29sb3Igc2hvdWxkIGluaGVyaXQgdGhlIGZvbnQgY29sb3IuIFRoaXMgaXMgbmVjZXNzYXJ5IHRvXG4gICAgLy8gZW5zdXJlIHRoYXQgdGhlIGJ1dHRvbiBpcyByZWFkYWJsZSBvbiBjdXN0b20gYmFja2dyb3VuZCBjb2xvcnMuIEl0J3Mgd3JvbmcgdG8gYWx3YXlzIGFzc3VtZVxuICAgIC8vIHRoYXQgdGhvc2UgYnV0dG9ucyBhcmUgYWx3YXlzIHBsYWNlZCBpbnNpZGUgb2YgY29udGFpbmVycyB3aXRoIHRoZSBkZWZhdWx0IGJhY2tncm91bmRcbiAgICAvLyBjb2xvciBvZiB0aGUgdGhlbWUgKGUuZy4gdGhlbWVkIHRvb2xiYXJzKS5cbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJ2NvbG9yJywgZGVmYXVsdCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tZm9jdXMtb3ZlcmxheS1jb2xvcigkdGhlbWUpO1xuXG4gICAgLy8gU2V0dXAgdGhlIHJpcHBsZSBjb2xvciB0byBiZSBiYXNlZCBvbiB0aGUgdGV4dCBjb2xvci4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHJpcHBsZXNcbiAgICAvLyBhcmUgbWF0Y2hpbmcgd2l0aCB0aGUgY3VycmVudCB0aGVtZSBwYWxldHRlIGFuZCBhcmUgaW4gY29udHJhc3QgdG8gdGhlIGJhY2tncm91bmQgY29sb3JcbiAgICAvLyAoZS5nIGluIHRoZW1lZCB0b29sYmFycykuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBvcGFjaXR5OiAkX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZDogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gIH1cblxuICAvLyBOb3RlOiB0aGlzIG5lZWRzIGEgYml0IGV4dHJhIHNwZWNpZmljaXR5LCBiZWNhdXNlIHdlJ3JlIG5vdCBndWFyYW50ZWVkIHRoZSBpbmNsdXNpb25cbiAgLy8gb3JkZXIgb2YgdGhlIHRoZW1lIHN0eWxlcyBhbmQgdGhlIGJ1dHRvbiByZXNldCBtYXkgZW5kIHVwIHJlc2V0dGluZyB0aGlzIGFzIHdlbGwuXG4gIC5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtkaXNhYmxlZF0pIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWZsYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICAvLyBEZWZhdWx0IGZvbnQgYW5kIGJhY2tncm91bmQgY29sb3Igd2hlbiBub3QgdXNpbmcgYW55IGNvbG9yIHBhbGV0dGUuXG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCByYWlzZWQtYnV0dG9uKTtcblxuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJ2NvbG9yJywgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnYmFja2dyb3VuZC1jb2xvcicsIGRlZmF1bHQpO1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXJpcHBsZS1jb2xvcigkdGhlbWUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC1zdHJva2VkLWJ1dHRvbiwgLm1hdC1mbGF0LWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcblxuICAgICY6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig4LCAkdGhlbWUpO1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDYsICR0aGVtZSk7XG5cbiAgICAmOm5vdChbZGlzYWJsZWRdKTphY3RpdmUge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMTIsICR0aGVtZSk7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24sXG4gIC5tYXQtZmxhdC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRvZ2dsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGRpdmlkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuXG4gICAgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBmb2N1c2VkLWJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG5cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGZvY3VzZWQtYnV0dG9uLCAxKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cblxuICBbZGlyPSdydGwnXSAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWJ1dHRvbi10b2dnbGUtdmVydGljYWwge1xuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBzZWxlY3RlZC1idXR0b24pO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24tdG9nZ2xlKTtcblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIH1cblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtY2FyZC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWNhcmQge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDEsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgIC8vIE5lZWRzIGV4dHJhIHNwZWNpZmljaXR5IHRvIGJlIGFibGUgdG8gb3ZlcnJpZGUgdGhlIGVsZXZhdGlvbiBzZWxlY3RvcnMuXG4gICAgJi5tYXQtY2FyZC1mbGF0IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jYXJkLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNhcmQge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgaGVhZGxpbmUpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgdGl0bGUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgdGl0bGUpO1xuICB9XG5cbiAgLm1hdC1jYXJkLXN1YnRpdGxlLFxuICAubWF0LWNhcmQtY29udGVudCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtY2hlY2tib3gtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG5cbiAgLy8gVGhlIGNvbG9yIG9mIHRoZSBjaGVja2JveCdzIGNoZWNrbWFyayAvIG1peGVkbWFyay5cbiAgJGNoZWNrYm94LW1hcmstY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG5cbiAgLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogV2hpbGUgdGhlIHNwZWMgY2FsbHMgZm9yIHRyYW5zbHVjZW50IGJsYWNrcy93aGl0ZXMgZm9yIGRpc2FibGVkIGNvbG9ycyxcbiAgLy8gdGhpcyBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBlbGVtZW50cyBsYXllcmVkIG9uIHRvcCBvZiBvbmUgYW5vdGhlci4gVG8gZ2V0IGFyb3VuZCB0aGlzIHdlXG4gIC8vIGJsZW5kIHRoZSBjb2xvcnMgdG9nZXRoZXIgYmFzZWQgb24gdGhlIGJhc2UgY29sb3IgYW5kIHRoZSB0aGVtZSBiYWNrZ3JvdW5kLlxuICAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrOiAjNjg2ODY4O1xuICAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodDogI2IwYjBiMDtcbiAgJGRpc2FibGVkLWNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyaywgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQpO1xuXG4gIC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWNoZWNrbWFyayB7XG4gICAgZmlsbDogJGNoZWNrYm94LW1hcmstY29sb3I7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoIHtcbiAgICAvLyAhaW1wb3J0YW50IGlzIG5lZWRlZCBoZXJlIGJlY2F1c2UgYSBzdHJva2UgbXVzdCBiZSBzZXQgYXMgYW5cbiAgICAvLyBhdHRyaWJ1dGUgb24gdGhlIFNWRyBpbiBvcmRlciBmb3IgbGluZSBhbmltYXRpb24gdG8gd29yayBwcm9wZXJseS5cbiAgICBzdHJva2U6ICRjaGVja2JveC1tYXJrLWNvbG9yICFpbXBvcnRhbnQ7XG5cbiAgICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdChibGFjay1vbi13aGl0ZSkge1xuICAgICAgLy8gSGF2aW5nIHRoZSBvbmUgYWJvdmUgYmUgIWltcG9ydGFudCBlbmRzIHVwIG92ZXJyaWRpbmcgdGhlIGJyb3dzZXIncyBhdXRvbWF0aWNcbiAgICAgIC8vIGNvbG9yIGludmVyc2lvbiBzbyB3ZSBuZWVkIHRvIHJlLWludmVydCBpdCBvdXJzZWx2ZXMgZm9yIGJsYWNrLW9uLXdoaXRlLlxuICAgICAgc3Ryb2tlOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jaGVja2JveC1taXhlZG1hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGVja2JveC1tYXJrLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLCAubWF0LWNoZWNrYm94LWNoZWNrZWQge1xuICAgICYubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICAmLm1hdC1jaGVja2JveC1jaGVja2VkLFxuICAgICYubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgICAgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5tYXQtY2hlY2tib3gtY2hlY2tlZCkge1xuICAgICAgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0IHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cblxuICAvLyBUaGlzIG9uZSBpcyBtb3ZlZCBkb3duIGhlcmUgc28gaXQgY2FuIHRhcmdldCBib3RoXG4gIC8vIHRoZSB0aGVtZSBjb2xvcnMgYW5kIHRoZSBkaXNhYmxlZCBzdGF0ZS5cbiAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3Qge1xuICAgIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICAvLyBOZWVkcyB0byBiZSByZW1vdmVkIGJlY2F1c2UgaXQgaGlkZXMgdGhlIGNoZWNrYm94IG91dGxpbmUuXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2hlY2tib3g6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpIHtcbiAgICAmLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hlY2tib3gtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2hlY2tib3gge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAvLyBUT0RPKGthcmEpOiBSZW1vdmUgdGhpcyBzdHlsZSB3aGVuIGZpeGluZyB2ZXJ0aWNhbCBiYXNlbGluZVxuICAubWF0LWNoZWNrYm94LWxheW91dCAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgICBsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gIH1cbn1cblxuXG5cblxuXG5cbiRtYXQtY2hpcC1yZW1vdmUtZm9udC1zaXplOiAxOHB4O1xuXG5AbWl4aW4gbWF0LWNoaXBzLWNvbG9yKCRmb3JlZ3JvdW5kLCAkYmFja2dyb3VuZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgY29sb3I6ICRmb3JlZ3JvdW5kO1xuXG4gIC5tYXQtY2hpcC1yZW1vdmUge1xuICAgIGNvbG9yOiAkZm9yZWdyb3VuZDtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkcGFsZXR0ZSkge1xuICBAaW5jbHVkZSBtYXQtY2hpcHMtY29sb3IobWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KSwgbWF0LWNvbG9yKCRwYWxldHRlKSk7XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjEpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hpcHMtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICR1bnNlbGVjdGVkLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgdW5zZWxlY3RlZC1jaGlwKTtcbiAgJHVuc2VsZWN0ZWQtZm9yZWdyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAge1xuICAgIEBpbmNsdWRlIG1hdC1jaGlwcy1jb2xvcigkdW5zZWxlY3RlZC1mb3JlZ3JvdW5kLCAkdW5zZWxlY3RlZC1iYWNrZ3JvdW5kKTtcblxuICAgICY6bm90KC5tYXQtY2hpcC1kaXNhYmxlZCkge1xuICAgICAgJjphY3RpdmUge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigzLCAkdGhlbWUpO1xuICAgICAgfVxuXG4gICAgICAubWF0LWNoaXAtcmVtb3ZlOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC41NDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1jaGlwLWRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkYWNjZW50KTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGlwcy10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1jaGlwIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG5cbiAgICAubWF0LWNoaXAtdHJhaWxpbmctaWNvbi5tYXQtaWNvbixcbiAgICAubWF0LWNoaXAtcmVtb3ZlLm1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogJG1hdC1jaGlwLXJlbW92ZS1mb250LXNpemU7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC10YWJsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXRhYmxlIHRoZWFkLCAubWF0LXRhYmxlIHRib2R5LCAubWF0LXRhYmxlIHRmb290LFxuICBtYXQtaGVhZGVyLXJvdywgbWF0LXJvdywgbWF0LWZvb3Rlci1yb3csXG4gIFttYXQtaGVhZGVyLXJvd10sIFttYXQtcm93XSwgW21hdC1mb290ZXItcm93XSxcbiAgLm1hdC10YWJsZS1zdGlja3kge1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIH1cblxuICBtYXQtcm93LCBtYXQtaGVhZGVyLXJvdywgbWF0LWZvb3Rlci1yb3csXG4gIHRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC10YWJsZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10YWJsZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cblxuXG5cbiRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC10b2RheS1ib3gtc2hhZG93LXdpZHRoOiAxcHg7XG4kbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtZmFkZS1hbW91bnQ6IDAuNjtcbiRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudDogMC4yO1xuJG1hdC1jYWxlbmRhci1ib2R5LWZvbnQtc2l6ZTogMTNweCAhZGVmYXVsdDtcbiRtYXQtY2FsZW5kYXItd2Vla2RheS10YWJsZS1mb250LXNpemU6IDExcHggIWRlZmF1bHQ7XG5cbkBtaXhpbiBfbWF0LWRhdGVwaWNrZXItY29sb3IoJHBhbGV0dGUpIHtcbiAgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICAkYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwYWxldHRlKTtcblxuICAgIEBpZiAodHlwZS1vZigkYmFja2dyb3VuZCkgPT0gY29sb3IpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGZhZGUtb3V0KCRiYWNrZ3JvdW5kLCAkbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtZmFkZS1hbW91bnQpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAvLyBJZiB3ZSBjb3VsZG4ndCByZXNvbHZlIHRvIGJhY2tncm91bmQgdG8gYSBjb2xvciAoZS5nLiBpdCdzIGEgQ1NTIHZhcmlhYmxlKSxcbiAgICAgIC8vIGZhbGwgYmFjayB0byBmYWRpbmcgdGhlIGNvbnRlbnQgb3V0IHZpYSBgb3BhY2l0eWAuXG4gICAgICBvcGFjaXR5OiAkbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQ7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAkbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtdG9kYXktYm94LXNoYWRvdy13aWR0aFxuICAgICAgICAgICAgICAgIG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1kYXRlcGlja2VyLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtY2FsZW5kYXItYXJyb3cge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaWNvbik7XG4gIH1cblxuICAvLyBUaGUgcHJldi9uZXh0IGJ1dHRvbnMgbmVlZCBhIGJpdCBtb3JlIHNwZWNpZmljaXR5IHRvXG4gIC8vIGF2b2lkIGJlaW5nIG92ZXJ3cml0dGVuIGJ5IHRoZSAubWF0LWljb24tYnV0dG9uLlxuICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLFxuICAubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLW5leHQtYnV0dG9uLFxuICAubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbiB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaWNvbik7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyLWRpdmlkZXI6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY2VsbDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkKTpob3ZlcixcbiAgLmNkay1rZXlib2FyZC1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUsXG4gIC5jZGstcHJvZ3JhbS1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUge1xuICAgICYgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgLy8gTm90ZTogdGhvdWdoIGl0J3Mgbm90IHRleHQsIHRoZSBib3JkZXIgaXMgYSBoaW50IGFib3V0IHRoZSBmYWN0IHRoYXQgdGhpcyBpcyB0b2RheSdzIGRhdGUsXG4gICAgLy8gc28gd2UgdXNlIHRoZSBoaW50IGNvbG9yLlxuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICAkY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcblxuICAgIEBpZiAodHlwZS1vZigkY29sb3IpID09IGNvbG9yKSB7XG4gICAgICBib3JkZXItY29sb3I6IGZhZGUtb3V0KCRjb2xvciwgJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50KTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIGNvbG9yIGRpZG4ndCByZXNvbHZlIHRvIGEgY29sb3IgdmFsdWUsIGJ1dCBzb21ldGhpbmcgbGlrZSBhIENTUyB2YXJpYWJsZSwgd2UgY2FuJ3RcbiAgICAgIC8vIGZhZGUgaXQgb3V0IHNvIHdlIGZhbGwgYmFjayB0byByZWR1Y2luZyB0aGUgZWxlbWVudCBvcGFjaXR5LiBOb3RlIHRoYXQgd2UgZG9uJ3QgdXNlIHRoZVxuICAgICAgLy8gJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50LCBiZWNhdXNlIGhpbnQgdGV4dCB1c3VhbGx5IGhhcyBzb21lIG9wYWNpdHkgYXBwbGllZFxuICAgICAgLy8gdG8gaXQgYWxyZWFkeSBhbmQgd2UgZG9uJ3Qgd2FudCB0aGVtIHRvIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyLlxuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSkpO1xuXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC1kYXRlcGlja2VyLWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgd2FybikpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50LXRvdWNoIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHByaW1hcnkpKTtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHdhcm4pKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1kYXRlcGlja2VyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNhbGVuZGFyIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5IHtcbiAgICBmb250LXNpemU6ICRtYXQtY2FsZW5kYXItYm9keS1mb250LXNpemU7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwsXG4gIC5tYXQtY2FsZW5kYXItcGVyaW9kLWJ1dHRvbiB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB0aCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogJG1hdC1jYWxlbmRhci13ZWVrZGF5LXRhYmxlLWZvbnQtc2l6ZTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtZGlhbG9nLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMjQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtZGlhbG9nLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWRpYWxvZy10aXRsZSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHRpdGxlKTtcbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1leHBhbnNpb24tcGFuZWwtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDIsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtYWN0aW9uLXJvdyB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgICY6bm90KFthcmlhLWRpc2FibGVkPSd0cnVlJ10pIHtcbiAgICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgICAmLmNkay1wcm9ncmFtLWZvY3VzZWQsXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRGlzYWJsZSB0aGUgaG92ZXIgb24gdG91Y2ggZGV2aWNlcyBzaW5jZSBpdCBjYW4gYXBwZWFyIGxpa2UgaXQgaXMgc3R1Y2suIFdlIGNhbid0IHVzZVxuICAvLyBgQG1lZGlhIChob3ZlcilgIGFib3ZlLCBiZWNhdXNlIHRoZSBkZXNrdG9wIHN1cHBvcnQgYnJvd3NlciBzdXBwb3J0IGlzbid0IGdyZWF0LlxuICBAbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpOm5vdChbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddKVxuICAgICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbixcbiAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcblxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtZXhwYW5zaW9uLXBhbmVsLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cbi8vIFRoaXMgbWl4aW4gd2lsbCBlbnN1cmUgdGhhdCBsaW5lcyB0aGF0IG92ZXJmbG93IHRoZSBjb250YWluZXIgd2lsbCBoaWRlIHRoZSBvdmVyZmxvdyBhbmRcbi8vIHRydW5jYXRlIG5lYXRseSB3aXRoIGFuIGVsbGlwc2lzLlxuQG1peGluIG1hdC10cnVuY2F0ZS1saW5lKCkge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLy8gTWl4aW4gdG8gcHJvdmlkZSBhbGwgbWF0LWxpbmUgc3R5bGVzLCBjaGFuZ2luZyBzZWNvbmRhcnkgZm9udCBzaXplIGJhc2VkIG9uIHdoZXRoZXIgdGhlIGxpc3Rcbi8vIGlzIGluIGRlbnNlIG1vZGUuXG5AbWl4aW4gbWF0LWxpbmUtYmFzZSgkc2Vjb25kYXJ5LWZvbnQtc2l6ZSkge1xuICAubWF0LWxpbmUge1xuICAgIEBpbmNsdWRlIG1hdC10cnVuY2F0ZS1saW5lKCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIC8vIGFsbCBsaW5lcyBidXQgdGhlIHRvcCBsaW5lIHNob3VsZCBoYXZlIHNtYWxsZXIgdGV4dFxuICAgICY6bnRoLWNoaWxkKG4rMikge1xuICAgICAgZm9udC1zaXplOiAkc2Vjb25kYXJ5LWZvbnQtc2l6ZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhpcyBtaXhpbiBub3JtYWxpemVzIGRlZmF1bHQgZWxlbWVudCBzdHlsZXMsIGUuZy4gZm9udCB3ZWlnaHQgZm9yIGhlYWRpbmcgdGV4dC5cbkBtaXhpbiBtYXQtbm9ybWFsaXplLXRleHQoKSB7XG4gICYgPiAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgfVxufVxuXG4vLyBUaGlzIG1peGluIHByb3ZpZGVzIGJhc2Ugc3R5bGVzIGZvciB0aGUgd3JhcHBlciBhcm91bmQgbWF0LWxpbmUgZWxlbWVudHMgaW4gYSBsaXN0LlxuQG1peGluIG1hdC1saW5lLXdyYXBwZXItYmFzZSgpIHtcbiAgQGluY2x1ZGUgbWF0LW5vcm1hbGl6ZS10ZXh0KCk7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLy8gTXVzdCByZW1vdmUgd3JhcHBlciB3aGVuIGxpbmVzIGFyZSBlbXB0eSBvciBpdCB0YWtlcyB1cCBob3Jpem9udGFsXG4gIC8vIHNwYWNlIGFuZCBwdXNoZXMgb3RoZXIgZWxlbWVudHMgdG8gdGhlIHJpZ2h0LlxuICAmOmVtcHR5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuXG4vLyBJbmNsdWRlIHRoaXMgZW1wdHkgbWl4aW4gZm9yIGNvbnNpc3RlbmN5IHdpdGggdGhlIG90aGVyIGNvbXBvbmVudHMuXG5AbWl4aW4gbWF0LWdyaWQtbGlzdC10aGVtZSgkdGhlbWUpIHsgfVxuXG5AbWl4aW4gbWF0LWdyaWQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1ncmlkLXRpbGUtaGVhZGVyLFxuICAubWF0LWdyaWQtdGlsZS1mb290ZXIge1xuICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuLy8gSW5jbHVkZSB0aGlzIGVtcHR5IG1peGluIGZvciBjb25zaXN0ZW5jeSB3aXRoIHRoZSBvdGhlciBjb21wb25lbnRzLlxuQG1peGluIG1hdC1pY29uLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWljb24ge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1pY29uLXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuLy8gUmVuZGVycyBhIGdyYWRpZW50IGZvciBzaG93aW5nIHRoZSBkYXNoZWQgbGluZSB3aGVuIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC5cbi8vIFVubGlrZSB1c2luZyBhIGJvcmRlciwgYSBncmFkaWVudCBhbGxvd3MgdXMgdG8gYWRqdXN0IHRoZSBzcGFjaW5nIG9mIHRoZSBkb3R0ZWQgbGluZVxuLy8gdG8gbWF0Y2ggdGhlIE1hdGVyaWFsIERlc2lnbiBzcGVjLlxuQG1peGluIG1hdC1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkY29sb3IpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IgMCUsICRjb2xvciAzMyUsIHRyYW5zcGFyZW50IDAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0cHggMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG4vLyBGaWd1cmVzIG91dCB0aGUgY29sb3Igb2YgdGhlIHBsYWNlaG9sZGVyIGZvciBhIGZvcm0gY29udHJvbC5cbi8vIFVzZWQgcHJpbWFyaWx5IHRvIHByZXZlbnQgdGhlIHZhcmlvdXMgZm9ybSBjb250cm9scyBmcm9tXG4vLyBiZWNvbWluZyBvdXQgb2Ygc3luYyBzaW5jZSB0aGVzZSBjb2xvcnMgYXJlbid0IGluIGEgcGFsZXR0ZS5cbkBmdW5jdGlvbiBfbWF0LWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3IoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gIEByZXR1cm4gbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNSwgMC40MikpO1xufVxuXG5cbi8qIHN0eWxlbGludC1kaXNhYmxlIG1hdGVyaWFsL25vLXByZWZpeGVzICovXG5AbWl4aW4gdXNlci1zZWxlY3QoJHZhbHVlKSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgLW1vei11c2VyLXNlbGVjdDogJHZhbHVlO1xuICAtbXMtdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbn1cblxuQG1peGluIGlucHV0LXBsYWNlaG9sZGVyIHtcbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gY3Vyc29yLWdyYWIge1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG5AbWl4aW4gY3Vyc29yLWdyYWJiaW5nIHtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xuICBjdXJzb3I6IGdyYWJiaW5nO1xufVxuXG5AbWl4aW4gYmFja2ZhY2UtdmlzaWJpbGl0eSgkdmFsdWUpIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiAkdmFsdWU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6ICR2YWx1ZTtcbn1cbi8qIHN0eWxlbGludC1lbmFibGUgKi9cblxuXG5cbkBtaXhpbiBtYXQtaW5wdXQtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudDpkaXNhYmxlZCxcbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuXG4gICAgQGluY2x1ZGUgaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IF9tYXQtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkdGhlbWUpO1xuICAgIH1cblxuICAgIC8vIE9uIGRhcmsgdGhlbWVzIHdlIHNldCB0aGUgbmF0aXZlIGBzZWxlY3RgIGNvbG9yIHRvIHNvbWUgc2hhZGUgb2Ygd2hpdGUsXG4gICAgLy8gaG93ZXZlciB0aGUgY29sb3IgcHJvcGFnYXRlcyB0byBhbGwgb2YgdGhlIGBvcHRpb25gIGVsZW1lbnRzLCB3aGljaCBhcmVcbiAgICAvLyBhbHdheXMgb24gYSB3aGl0ZSBiYWNrZ3JvdW5kIGluc2lkZSB0aGUgZHJvcGRvd24sIGNhdXNpbmcgdGhlbSB0byBibGVuZCBpbi5cbiAgICAvLyBTaW5jZSB3ZSBjYW4ndCBjaGFuZ2UgYmFja2dyb3VuZCBvZiB0aGUgZHJvcGRvd24sIHdlIG5lZWQgdG8gZXhwbGljaXRseVxuICAgIC8vIHJlc2V0IHRoZSBjb2xvciBvZiB0aGUgb3B0aW9ucyB0byBzb21ldGhpbmcgZGFyay5cbiAgICBAaWYgKG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKSkge1xuICAgICAgb3B0aW9uIHtcbiAgICAgICAgY29sb3I6ICRkYXJrLXByaW1hcnktdGV4dDtcbiAgICAgIH1cblxuICAgICAgb3B0aW9uOmRpc2FibGVkIHtcbiAgICAgICAgY29sb3I6ICRkYXJrLWRpc2FibGVkLXRleHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1hY2NlbnQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCxcbiAgLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gIH1cbn1cblxuQG1peGluIG1hdC1pbnB1dC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC8vIFRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiB0aGUgdG9wIG9mIHRoZSBsaW5lIGFuZCB0aGUgdG9wIG9mIHRoZSBhY3R1YWwgdGV4dFxuICAvLyAoYXMgYSBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplKS5cbiAgJGxpbmUtc3BhY2luZzogKCRsaW5lLWhlaWdodCAtIDEpIC8gMjtcblxuICAvLyA8aW5wdXQ+IGVsZW1lbnRzIHNlZW0gdG8gaGF2ZSB0aGVpciBoZWlnaHQgc2V0IHNsaWdodGx5IHRvbyBsYXJnZSBvbiBTYWZhcmkgY2F1c2luZyB0aGUgdGV4dCB0b1xuICAvLyBiZSBtaXNhbGlnbmVkIHcuci50LiB0aGUgcGxhY2Vob2xkZXIuIEFkZGluZyB0aGlzIG1hcmdpbiBjb3JyZWN0cyBpdC5cbiAgaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIG1hcmdpbi10b3A6IC0kbGluZS1zcGFjaW5nICogMWVtO1xuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtbGlzdC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWxpc3QtYmFzZSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1saXN0LWl0ZW0tZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlzYWJsZWQtbGlzdC1vcHRpb24pO1xuICB9XG5cbiAgLm1hdC1saXN0LW9wdGlvbixcbiAgLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbSxcbiAgLm1hdC1hY3Rpb24tbGlzdCAubWF0LWxpc3QtaXRlbSB7XG4gICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdob3ZlcicpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gICRmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuXG4gIC5tYXQtbGlzdC1pdGVtIHtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG5cbiAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuXG4gIC8vIERlZmF1bHQgbGlzdFxuICAubWF0LWxpc3QtYmFzZSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpKTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMik7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cblxuICAvLyBEZW5zZSBsaXN0XG4gIC5tYXQtbGlzdC1iYXNlW2RlbnNlXSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgfVxuXG4gICAgLm1hdC1zdWJoZWFkZXIge1xuICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1tZW51LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtbWVudS1wYW5lbCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ3RleHQnKTtcblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICYsICY6OmFmdGVyIHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1tZW51LWl0ZW0gLm1hdC1pY29uLW5vLWNvbG9yLFxuICAubWF0LW1lbnUtaXRlbS1zdWJtZW51LXRyaWdnZXI6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICB9XG5cbiAgLm1hdC1tZW51LWl0ZW06aG92ZXIsXG4gIC5tYXQtbWVudS1pdGVtLmNkay1wcm9ncmFtLWZvY3VzZWQsXG4gIC5tYXQtbWVudS1pdGVtLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAubWF0LW1lbnUtaXRlbS1oaWdobGlnaHRlZCB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnaG92ZXInKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1tZW51LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LW1lbnUtaXRlbSB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXBhZ2luYXRvci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LXBhZ2luYXRvciB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3IsXG4gIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4gIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvci1maXJzdCxcbiAgLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIHtcbiAgICAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4gICAgLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50LFxuICAgIC5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuICAgIC5tYXQtcGFnaW5hdG9yLWxhc3Qge1xuICAgICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICdkaXNhYmxlZCcpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXBhZ2luYXRvci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1wYWdpbmF0b3IsXG4gIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1wcm9ncmVzcy1iYXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgIGZpbGw6IG1hdC1jb2xvcigkcHJpbWFyeSwgbGlnaHRlcik7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgbGlnaHRlcik7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQge1xuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgICAgZmlsbDogbWF0LWNvbG9yKCRhY2NlbnQsIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIHtcbiAgICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICAgIGZpbGw6IG1hdC1jb2xvcigkd2FybiwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2FybiwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wcm9ncmVzcy1iYXItdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1wcm9ncmVzcy1zcGlubmVyLCAubWF0LXNwaW5uZXIge1xuICAgIGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXJhZGlvLWNvbG9yKCRwYWxldHRlKSB7XG4gICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgfVxuXG4gIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLFxuICAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSxcbiAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLFxuICAmOmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtcmFkaW8tdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1yYWRpby1idXR0b24ge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC1yYWRpby1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcmFkaW8tY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXJhZGlvLWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIG5lZWRzIGV4dHJhIHNwZWNpZmljaXR5LCBiZWNhdXNlIHRoZSBjbGFzc2VzIGFib3ZlIGFyZSBjb21iaW5lZFxuICAgIC8vIChlLmcuIGAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50YCkgd2hpY2ggaW5jcmVhc2VzIHRoZWlyIHNwZWNpZmljaXR5IGEgbG90LlxuICAgIC8vIFRPRE86IGNvbnNpZGVyIG1ha2luZyB0aGUgc2VsZWN0b3JzIGludG8gZGVzY2VuZGFudHMgKGAubWF0LXByaW1hcnkgLm1hdC1yYWRpby1idXR0b25gKS5cbiAgICAmLm1hdC1yYWRpby1kaXNhYmxlZCB7XG4gICAgICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlLFxuICAgICAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgICAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuXG4gICAgICAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50LFxuICAgICAgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1yYWRpby1sYWJlbC1jb250ZW50IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN3aXRjaCB0aGlzIHRvIGEgc29saWQgY29sb3Igc2luY2Ugd2UncmUgdXNpbmcgYG9wYWNpdHlgXG4gICAgLy8gdG8gY29udHJvbCBob3cgb3BhcXVlIHRoZSByaXBwbGUgc2hvdWxkIGJlLlxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcmFkaW8tdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1zZWxlY3QtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogX21hdC1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCR0aGVtZSk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC12YWx1ZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtcGFuZWwge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcblxuICAgIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIsIDAuMTIpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgJi5tYXQtZm9jdXNlZCB7XG4gICAgICAmLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LWFjY2VudCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4gLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWludmFsaWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zZWxlY3QtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAubWF0LXNlbGVjdCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGhlaWdodDogJGxpbmUtaGVpZ2h0ICogMWVtO1xuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXNpZGVuYXYtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICRkcmF3ZXItYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAkZHJhd2VyLWNvbnRhaW5lci1iYWNrZ3JvdW5kLWNvbG9yOiAgbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcbiAgJGRyYXdlci1wdXNoLWJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgJGRyYXdlci1zaWRlLWJvcmRlcjogc29saWQgMXB4IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLWNvbnRhaW5lci1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1kcmF3ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItYmFja2dyb3VuZC1jb2xvcjtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LWRyYXdlci1wdXNoIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItcHVzaC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIH1cblxuICAgICY6bm90KC5tYXQtZHJhd2VyLXNpZGUpIHtcbiAgICAgIC8vIFRoZSBlbGV2YXRpb24gb2Ygei0xNiBpcyBub3RlZCBpbiB0aGUgZGVzaWduIHNwZWNpZmljYXRpb25zLlxuICAgICAgLy8gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbXBvbmVudHMvbmF2aWdhdGlvbi1kcmF3ZXIuaHRtbFxuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMTYsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kcmF3ZXItc2lkZSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuXG4gICAgJi5tYXQtZHJhd2VyLWVuZCB7XG4gICAgICBib3JkZXItbGVmdDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAubWF0LWRyYXdlci1zaWRlIHtcbiAgICBib3JkZXItbGVmdDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG5cbiAgICAmLm1hdC1kcmF3ZXItZW5kIHtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZHJhd2VyLWJhY2tkcm9wLm1hdC1kcmF3ZXItc2hvd24ge1xuICAgICRvcGFjaXR5OiAwLjY7XG4gICAgJGJhY2tkcm9wLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQsICRvcGFjaXR5KTtcblxuICAgIEBpZiAodHlwZS1vZigkYmFja2Ryb3AtY29sb3IpID09IGNvbG9yKSB7XG4gICAgICAvLyBXZSB1c2UgaW52ZXJ0KCkgaGVyZSB0byBoYXZlIHRoZSBkYXJrZW4gdGhlIGJhY2tncm91bmQgY29sb3IgZXhwZWN0ZWQgdG8gYmUgdXNlZC4gSWYgdGhlXG4gICAgICAvLyBiYWNrZ3JvdW5kIGlzIGxpZ2h0LCB3ZSB1c2UgYSBkYXJrIGJhY2tkcm9wLiBJZiB0aGUgYmFja2dyb3VuZCBpcyBkYXJrLFxuICAgICAgLy8gd2UgdXNlIGEgbGlnaHQgYmFja2Ryb3AuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbnZlcnQoJGJhY2tkcm9wLWNvbG9yKTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgLy8gSWYgd2UgY291bGRuJ3QgcmVzb2x2ZSB0aGUgYmFja2Ryb3AgY29sb3IgdG8gYSBjb2xvciB2YWx1ZSwgZmFsbCBiYWNrIHRvIHVzaW5nXG4gICAgICAvLyBgb3BhY2l0eWAgdG8gbWFrZSBpdCBvcGFxdWUgc2luY2UgaXRzIGVuZCB2YWx1ZSBjb3VsZCBiZSBhIHNvbGlkIGNvbG9yLlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tkcm9wLWNvbG9yO1xuICAgICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc2lkZW5hdi10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cblxuQG1peGluIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSkge1xuICAmLm1hdC1jaGVja2VkIHtcbiAgICAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgICAgIC8vIE9wYWNpdHkgaXMgZGV0ZXJtaW5lZCBmcm9tIHRoZSBzcGVjcyBmb3IgdGhlIHNlbGVjdGlvbiBjb250cm9scy5cbiAgICAgIC8vIFNlZTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29tcG9uZW50cy9zZWxlY3Rpb24tY29udHJvbHMuaHRtbCNzcGVjc1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUsIDAuNTQpO1xuICAgIH1cblxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgLy8gU2V0IG5vIG9wYWNpdHkgZm9yIHRoZSByaXBwbGVzIGJlY2F1c2UgdGhlIHJpcHBsZSBvcGFjaXR5IHdpbGwgYmUgYWRqdXN0ZWQgZHluYW1pY2FsbHlcbiAgICAgIC8vIGJhc2VkIG9uIHRoZSB0eXBlIG9mIGludGVyYWN0aW9uIHdpdGggdGhlIHNsaWRlLXRvZ2dsZSAoZS5nLiBmb3IgaG92ZXIsIGZvY3VzKVxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlLXRvZ2dsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcms6IG1hcF9nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLy8gQ29sb3IgaHVlcyBhcmUgYmFzZWQgb24gdGhlIHNwZWNzIHdoaWNoIGJyaWVmbHkgc2hvdyB0aGUgaHVlcyB0aGF0IGFyZSBhcHBsaWVkIHRvIGEgc3dpdGNoLlxuICAvLyBUaGUgMjAxOCBzcGVjcyBubyBsb25nZXIgZGVzY3JpYmUgaG93IGRhcmsgc3dpdGNoZXMgc2hvdWxkIGxvb2sgbGlrZS4gRHVlIHRvIHRoZSBsYWNrIG9mXG4gIC8vIGluZm9ybWF0aW9uIGZvciBkYXJrIHRoZW1lZCBzd2l0Y2hlcywgd2UgcGFydGlhbGx5IGtlZXAgdGhlIG9sZCBiZWhhdmlvciB0aGF0IGlzIGJhc2VkIG9uXG4gIC8vIHRoZSBwcmV2aW91cyBzcGVjaWZpY2F0aW9ucy4gRm9yIHRoZSBjaGVja2VkIGNvbG9yIHdlIGFsd2F5cyB1c2UgdGhlIGBkZWZhdWx0YCBodWUgYmVjYXVzZVxuICAvLyB0aGF0IGZvbGxvd3MgTURDIGFuZCBhbHNvIG1ha2VzIGl0IGVhc2llciBmb3IgcGVvcGxlIHRvIGNyZWF0ZSBhIGN1c3RvbSB0aGVtZSB3aXRob3V0IG5lZWRpbmdcbiAgLy8gdG8gc3BlY2lmeSBlYWNoIGh1ZSBpbmRpdmlkdWFsbHkuXG4gICR0aHVtYi11bmNoZWNrZWQtaHVlOiBpZigkaXMtZGFyaywgNDAwLCA1MCk7XG4gICR0aHVtYi1jaGVja2VkLWh1ZTogZGVmYXVsdDtcblxuICAkYmFyLXVuY2hlY2tlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICRyaXBwbGUtdW5jaGVja2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UpO1xuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlIHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCRhY2NlbnQsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG5cbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHByaW1hcnksICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCR3YXJuLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cblxuICAgICY6bm90KC5tYXQtY2hlY2tlZCkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICAvLyBTZXQgbm8gb3BhY2l0eSBmb3IgdGhlIHJpcHBsZXMgYmVjYXVzZSB0aGUgcmlwcGxlIG9wYWNpdHkgd2lsbCBiZSBhZGp1c3RlZCBkeW5hbWljYWxseVxuICAgICAgLy8gYmFzZWQgb24gdGhlIHR5cGUgb2YgaW50ZXJhY3Rpb24gd2l0aCB0aGUgc2xpZGUtdG9nZ2xlIChlLmcuIGZvciBob3ZlciwgZm9jdXMpXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmlwcGxlLXVuY2hlY2tlZC1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMSwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJG1hdC1ncmV5LCAkdGh1bWItdW5jaGVja2VkLWh1ZSk7XG4gIH1cblxuICAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXItdW5jaGVja2VkLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGUtdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXNsaWRlLXRvZ2dsZS1jb250ZW50IHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cblxuXG5cblxuQG1peGluIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJHBhbGV0dGUpIHtcbiAgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbiAgLm1hdC1zbGlkZXItdGh1bWIsXG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICRtYXQtc2xpZGVyLW9mZi1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmKTtcbiAgJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZi1hY3RpdmUpO1xuICAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmKTtcbiAgJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW1pbik7XG4gICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci1mb2N1cy1yaW5nLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgZGVmYXVsdCwgMC4yKTtcbiAgJG1hdC1zbGlkZXItZm9jdXMtcmluZy1taW4tdmFsdWUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgMC4xMik7XG4gICRtYXQtc2xpZGVyLXRpY2stY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgMC43KTtcbiAgJG1hdC1zbGlkZXItdGljay1zaXplOiAycHg7XG5cbiAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1wcmltYXJ5IHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtYWNjZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRhY2NlbnQpO1xuICB9XG5cbiAgLm1hdC13YXJuIHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCR3YXJuKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWZvY3VzLXJpbmctY29sb3I7XG4gIH1cblxuICAubWF0LXNsaWRlcjpob3ZlcixcbiAgLmNkay1mb2N1c2VkIHtcbiAgICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWRpc2FibGVkIHtcbiAgICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLFxuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4gICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItbWluLXZhbHVlIHtcbiAgICAubWF0LXNsaWRlci1mb2N1cy1yaW5nIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWZvY3VzLXJpbmctbWluLXZhbHVlLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iLFxuICAgICAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgJi5jZGstZm9jdXNlZCB7XG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iLFxuICAgICAgICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItbGFiZWwtY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKSB7XG4gICAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlcixcbiAgICAgICYuY2RrLWZvY3VzZWQge1xuICAgICAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWhhcy10aWNrcyAubWF0LXNsaWRlci13cmFwcGVyOjphZnRlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci10aWNrLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItaG9yaXpvbnRhbCAubWF0LXNsaWRlci10aWNrcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJG1hdC1zbGlkZXItdGljay1jb2xvcixcbiAgICAgICAgJG1hdC1zbGlkZXItdGljay1jb2xvciAkbWF0LXNsaWRlci10aWNrLXNpemUsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcbiAgICAvLyBGaXJlZm94IGRvZXNuJ3QgZHJhdyB0aGUgZ3JhZGllbnQgY29ycmVjdGx5IHdpdGggJ3RvIHJpZ2h0J1xuICAgIC8vIChzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTMxNDMxOSkuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1yZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDAuMDAwMWRlZywgJG1hdC1zbGlkZXItdGljay1jb2xvcixcbiAgICAgICAgJG1hdC1zbGlkZXItdGljay1jb2xvciAkbWF0LXNsaWRlci10aWNrLXNpemUsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJG1hdC1zbGlkZXItdGljay1jb2xvcixcbiAgICAgICAgJG1hdC1zbGlkZXItdGljay1jb2xvciAkbWF0LXNsaWRlci10aWNrLXNpemUsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXN0ZXBwZXItdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1zdGVwLWhlYWRlciB7XG4gICAgJi5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgICAmLmNkay1wcm9ncmFtLWZvY3VzZWQsXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG5cbiAgICAvLyBPbiB0b3VjaCBkZXZpY2VzIHRoZSA6aG92ZXIgc3RhdGUgd2lsbCBsaW5nZXIgb24gdGhlIGVsZW1lbnQgYWZ0ZXIgYSB0YXAuXG4gICAgLy8gUmVzZXQgaXQgdmlhIGBAbWVkaWFgIGFmdGVyIHRoZSBkZWNsYXJhdGlvbiwgYmVjYXVzZSB0aGUgbWVkaWEgcXVlcnkgaXNuJ3RcbiAgICAvLyBzdXBwb3J0ZWQgYnkgYWxsIGJyb3dzZXJzIHlldC5cbiAgICBAbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwsXG4gICAgLm1hdC1zdGVwLW9wdGlvbmFsIHtcbiAgICAgIC8vIFRPRE8oam9zZXBocGVycm90dCk6IFVwZGF0ZSB0byB1c2luZyBhIGNvcnJlY3RlZCBkaXNhYmxlZC10ZXh0IGNvbnRyYXN0XG4gICAgICAvLyBpbnN0ZWFkIG9mIHNlY29uZGFyeS10ZXh0LlxuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uIHtcbiAgICAgIC8vIFRPRE8oam9zZXBocGVycm90dCk6IFVwZGF0ZSB0byB1c2luZyBhIGNvcnJlY3RlZCBkaXNhYmxlZC10ZXh0IGNvbnRyYXN0XG4gICAgICAvLyBpbnN0ZWFkIG9mIHNlY29uZGFyeS10ZXh0LlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lLFxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVycm9yIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWFjdGl2ZSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtZXJyb3Ige1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwsIC5tYXQtc3RlcHBlci12ZXJ0aWNhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgfVxuXG4gIC5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmUge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjpiZWZvcmUsXG4gIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YWZ0ZXIsXG4gIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmUge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zdGVwcGVyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXN0ZXBwZXItdmVydGljYWwsIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIH07XG4gIH1cblxuICAubWF0LXN0ZXAtc3ViLWxhYmVsLWVycm9yIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsLWVycm9yIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbC1zZWxlY3RlZCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9O1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc29ydC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXNvcnQtaGVhZGVyLWFycm93IHtcbiAgICAkdGFibGUtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICAgICR0ZXh0LWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcblxuICAgIC8vIEJlY2F1c2UgdGhlIGFycm93IGlzIG1hZGUgdXAgb2YgbXVsdGlwbGUgZWxlbWVudHMgdGhhdCBhcmUgc3RhY2tlZCBvbiB0b3Agb2YgZWFjaCBvdGhlcixcbiAgICAvLyB3ZSBjYW4ndCB1c2UgdGhlIHNlbWktdHJhc3BhcmVudCBjb2xvciBmcm9tIHRoZSB0aGVtZSBkaXJlY3RseS4gSWYgdGhlIHZhbHVlIGlzIGEgY29sb3JcbiAgICAvLyAqdHlwZSosIHdlIGNvbnZlcnQgaXQgaW50byBhIHNvbGlkIGNvbG9yIGJ5IHRha2luZyB0aGUgb3BhY2l0eSBmcm9tIHRoZSByZ2JhIHZhbHVlIGFuZFxuICAgIC8vIHVzaW5nIHRoZSB2YWx1ZSB0byBkZXRlcm1pbmUgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGJhY2tncm91bmQgdG8gcHV0IGludG8gZm9yZWdyb3VuZFxuICAgIC8vIHdoZW4gbWl4aW5nIHRoZSBjb2xvcnMgdG9nZXRoZXIuIE90aGVyd2lzZSwgaWYgaXQgcmVzb2x2ZXMgdG8gc29tZXRoaW5nIGRpZmZlcmVudFxuICAgIC8vIChlLmcuIGl0IHJlc29sdmVzIHRvIGEgQ1NTIHZhcmlhYmxlKSwgd2UgdXNlIHRoZSBjb2xvciBkaXJlY3RseS5cbiAgICBAaWYgKHR5cGUtb2YoJHRhYmxlLWJhY2tncm91bmQpID09IGNvbG9yIGFuZCB0eXBlLW9mKCR0ZXh0LWNvbG9yKSA9PSBjb2xvcikge1xuICAgICAgJHRleHQtb3BhY2l0eTogb3BhY2l0eSgkdGV4dC1jb2xvcik7XG4gICAgICBjb2xvcjogbWl4KCR0YWJsZS1iYWNrZ3JvdW5kLCByZ2JhKCR0ZXh0LWNvbG9yLCAxKSwgKDEgLSAkdGV4dC1vcGFjaXR5KSAqIDEwMCUpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICBjb2xvcjogJHRleHQtY29sb3I7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc29ydC10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtdGFicy10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRoZWFkZXItYm9yZGVyOiAxcHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LXRhYi1uYXYtYmFyLFxuICAubWF0LXRhYi1oZWFkZXIge1xuICAgIGJvcmRlci1ib3R0b206ICRoZWFkZXItYm9yZGVyO1xuICB9XG5cbiAgLm1hdC10YWItZ3JvdXAtaW52ZXJ0ZWQtaGVhZGVyIHtcbiAgICAubWF0LXRhYi1uYXYtYmFyLFxuICAgIC5tYXQtdGFiLWhlYWRlciB7XG4gICAgICBib3JkZXItdG9wOiAkaGVhZGVyLWJvcmRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtdGFiLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBoZWFkZXIgYm9yZGVyIHdoZW4gdGhlcmUgaXMgYSBiYWNrZ3JvdW5kIGNvbG9yXG4gIC5tYXQtdGFiLWdyb3VwW2NsYXNzKj0nbWF0LWJhY2tncm91bmQtJ10gLm1hdC10YWItaGVhZGVyLFxuICAubWF0LXRhYi1uYXYtYmFyW2NsYXNzKj0nbWF0LWJhY2tncm91bmQtJ10ge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgfVxuXG4gIC5tYXQtdGFiLWdyb3VwLCAubWF0LXRhYi1uYXYtYmFyIHtcbiAgICAkdGhlbWUtY29sb3JzOiAoXG4gICAgICBwcmltYXJ5OiAkcHJpbWFyeSxcbiAgICAgIGFjY2VudDogJGFjY2VudCxcbiAgICAgIHdhcm46ICR3YXJuXG4gICAgKTtcblxuICAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gJHRoZW1lLWNvbG9ycyB7XG4gICAgICAvLyBTZXQgdGhlIGZvcmVncm91bmQgY29sb3Igb2YgdGhlIHRhYnNcbiAgICAgICYubWF0LSN7JG5hbWV9IHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10YWItbGFiZWwtZm9jdXMoJGNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1pbmstYmFyKCRjb2xvcik7XG5cbiAgICAgICAgLy8gT3ZlcnJpZGUgaW5rIGJhciB3aGVuIGJhY2tncm91bmQgY29sb3IgaXMgdGhlIHNhbWVcbiAgICAgICAgJi5tYXQtYmFja2dyb3VuZC0jeyRuYW1lfSB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1pbmstYmFyKCRjb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluICR0aGVtZS1jb2xvcnMge1xuICAgICAgLy8gU2V0IGJhY2tncm91bmQgY29sb3Igb2YgdGhlIHRhYnMgYW5kIG92ZXJyaWRlIGZvY3VzIGNvbG9yXG4gICAgICAmLm1hdC1iYWNrZ3JvdW5kLSN7JG5hbWV9IHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10YWItbGFiZWwtZm9jdXMoJGNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10YWJzLWJhY2tncm91bmQoJGNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9tYXQtaW5rLWJhcigkY29sb3IsICRodWU6IGRlZmF1bHQpIHtcbiAgLm1hdC1pbmstYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGNvbG9yLCAkaHVlKTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC10YWItbGFiZWwtZm9jdXMoJHRhYi1mb2N1cy1jb2xvcikge1xuICAubWF0LXRhYi1sYWJlbCxcbiAgLm1hdC10YWItbGluayB7XG4gICAgJi5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgICAmLmNkay1wcm9ncmFtLWZvY3VzZWQge1xuICAgICAgJjpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR0YWItZm9jdXMtY29sb3IsIGxpZ2h0ZXIsIDAuMyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRhYnMtYmFja2dyb3VuZCgkYmFja2dyb3VuZC1jb2xvcikge1xuICAvLyBTZXQgYmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIHRhYiBncm91cFxuICAubWF0LXRhYi1oZWFkZXIsIC5tYXQtdGFiLWxpbmtzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IpO1xuICB9XG5cbiAgLy8gU2V0IGxhYmVscyB0byBjb250cmFzdCBhZ2FpbnN0IGJhY2tncm91bmRcbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuXG4gICAgJi5tYXQtdGFiLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuNCk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0IHBhZ2luYXRpb24gY2hldnJvbnMgdG8gY29udHJhc3QgYmFja2dyb3VuZFxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC40KTtcbiAgfVxuXG4gIC8vIFNldCByaXBwbGVzIGNvbG9yIHRvIGJlIHRoZSBjb250cmFzdCBjb2xvciBvZiB0aGUgbmV3IGJhY2tncm91bmQuIE90aGVyd2lzZSB0aGUgcmlwcGxlXG4gIC8vIGNvbG9yIHdpbGwgYmUgYmFzZWQgb24gdGhlIGFwcCBiYWNrZ3JvdW5kIGNvbG9yLlxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuMTIpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdGFicy10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10YWItZ3JvdXAge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gX21hdC10b29sYmFyLWNvbG9yKCRwYWxldHRlKSB7XG4gIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIGNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xufVxuXG5AbWl4aW4gX21hdC10b29sYmFyLWZvcm0tZmllbGQtb3ZlcnJpZGVzIHtcbiAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSxcbiAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSxcbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgLm1hdC1zZWxlY3QtdmFsdWUsXG4gIC5tYXQtc2VsZWN0LWFycm93LFxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdG9vbGJhci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGFwcC1iYXIpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1mb3JtLWZpZWxkLW92ZXJyaWRlcztcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2xiYXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdG9vbGJhcixcbiAgLm1hdC10b29sYmFyIGgxLFxuICAubWF0LXRvb2xiYXIgaDIsXG4gIC5tYXQtdG9vbGJhciBoMyxcbiAgLm1hdC10b29sYmFyIGg0LFxuICAubWF0LXRvb2xiYXIgaDUsXG4gIC5tYXQtdG9vbGJhciBoNiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHRpdGxlKTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuXG5cblxuXG4kbWF0LXRvb2x0aXAtdGFyZ2V0LWhlaWdodDogMjJweDtcbiRtYXQtdG9vbHRpcC1mb250LXNpemU6IDEwcHg7XG4kbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZzogKCRtYXQtdG9vbHRpcC10YXJnZXQtaGVpZ2h0IC0gJG1hdC10b29sdGlwLWZvbnQtc2l6ZSkgLyAyO1xuXG4kbWF0LXRvb2x0aXAtaGFuZHNldC10YXJnZXQtaGVpZ2h0OiAzMHB4O1xuJG1hdC10b29sdGlwLWhhbmRzZXQtZm9udC1zaXplOiAxNHB4O1xuJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZzpcbiAgICAoJG1hdC10b29sdGlwLWhhbmRzZXQtdGFyZ2V0LWhlaWdodCAtICRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZSkgLyAyO1xuXG5AbWl4aW4gbWF0LXRvb2x0aXAtdGhlbWUoJHRoZW1lKSB7XG4gIC5tYXQtdG9vbHRpcCB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRtYXQtZ3JleSwgNzAwLCAwLjkpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdG9vbHRpcC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10b29sdGlwIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgIGZvbnQtc2l6ZTogJG1hdC10b29sdGlwLWZvbnQtc2l6ZTtcbiAgICBwYWRkaW5nLXRvcDogJG1hdC10b29sdGlwLXZlcnRpY2FsLXBhZGRpbmc7XG4gICAgcGFkZGluZy1ib3R0b206ICRtYXQtdG9vbHRpcC12ZXJ0aWNhbC1wYWRkaW5nO1xuICB9XG5cbiAgLm1hdC10b29sdGlwLWhhbmRzZXQge1xuICAgIGZvbnQtc2l6ZTogJG1hdC10b29sdGlwLWhhbmRzZXQtZm9udC1zaXplO1xuICAgIHBhZGRpbmctdG9wOiAkbWF0LXRvb2x0aXAtaGFuZHNldC12ZXJ0aWNhbC1wYWRkaW5nO1xuICAgIHBhZGRpbmctYm90dG9tOiAkbWF0LXRvb2x0aXAtaGFuZHNldC12ZXJ0aWNhbC1wYWRkaW5nO1xuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1zbmFjay1iYXItdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuXG4gIC5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XG4gICAgLy8gVXNlIHRoZSBwcmltYXJ5IHRleHQgb24gdGhlIGRhcmsgdGhlbWUsIGV2ZW4gdGhvdWdoIHRoZSBsaWdodGVyIG9uZSB1c2VzXG4gICAgLy8gYSBzZWNvbmRhcnksIGJlY2F1c2UgdGhlIGNvbnRyYXN0IG9uIHRoZSBsaWdodCBwcmltYXJ5IHRleHQgaXMgcG9vci5cbiAgICBjb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsICRkYXJrLXByaW1hcnktdGV4dCwgJGxpZ2h0LXNlY29uZGFyeS10ZXh0KTtcbiAgICBiYWNrZ3JvdW5kOiBpZigkaXMtZGFyay10aGVtZSwgbWFwLWdldCgkbWF0LWdyZXksIDUwKSwgIzMyMzIzMik7XG5cbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbig2LCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgICBjb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsIGluaGVyaXQsIG1hdC1jb2xvcigkYWNjZW50KSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbmFjay1iYXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBpbmhlcml0O1xuICAgICAgc2l6ZTogaW5oZXJpdDtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgZmlsbCBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtZmlsbC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkZmlsbC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjEsIDAuMDQpKTtcbiAgJGZpbGwtZGlzYWJsZWQtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCBpZigkaXMtZGFyay10aGVtZSwgMC4wNSwgMC4wMikpO1xuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjUsIDAuNDIpKTtcbiAgJGxhYmVsLWRpc2FibGVkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwge1xuICAgIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmaWxsLWJhY2tncm91bmQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlsbC1kaXNhYmxlZC1iYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRsYWJlbC1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGUpXG4gICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtZmlsbC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgcGFkZGluZyBvbiB0b3Agb2YgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZy10b3A6IDAuMjVlbTtcbiAgLy8gVGhlIHBhZGRpbmcgYmVsb3cgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZy1ib3R0b206IDAuNzVlbTtcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIGFtb3VudCB3ZSBvZmZzZXQgdGhlIGxhYmVsIGZyb20gdGhlIGlucHV0IHRleHQgaW4gdGhlIGZpbGwgYXBwZWFyYW5jZS5cbiAgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ6IC0wLjVlbTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmctdG9wIDAgJGluZml4LXBhZGRpbmctYm90dG9tIDA7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZy10b3A7XG4gICAgICBtYXJnaW4tdG9wOiAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmctdG9wICsgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZy10b3AgKyAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIGxlZ2FjeSBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtbGVnYWN5LXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICRsYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICR1bmRlcmxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC40MikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1oaW50IHtcbiAgICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBAaW5jbHVkZSBtYXQtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJHVuZGVybGluZS1jb2xvcik7XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgLy8gV2UgdXNlIHBlcnNwZWN0aXZlIHRvIGZpeCB0aGUgdGV4dCBibHVycmluZXNzIGFzIGRlc2NyaWJlZCBoZXJlOlxuICAvLyBodHRwOi8vd3d3LnVzZXJhZ2VudG1hbi5jb20vYmxvZy8yMDE0LzA1LzA0L2ZpeGluZy10eXBvZ3JhcGh5LWluc2lkZS1vZi0yLWQtY3NzLXRyYW5zZm9ybXMvXG4gIC8vIFRoaXMgcmVzdWx0cyBpbiBhIHNtYWxsIGppdHRlciBhZnRlciB0aGUgbGFiZWwgZmxvYXRzIG9uIEZpcmVmb3gsIHdoaWNoIHRoZVxuICAvLyB0cmFuc2xhdGVaIGZpeGVzLlxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcpIHNjYWxlKCRmb250LXNjYWxlKSBwZXJzcGVjdGl2ZSgxMDBweClcbiAgdHJhbnNsYXRlWigwLjAwMXB4ICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpO1xuICAvLyBUaGUgdHJpY2tzIGFib3ZlIHVzZWQgdG8gc21vb3RoIG91dCB0aGUgYW5pbWF0aW9uIG9uIGNocm9tZSBhbmQgZmlyZWZveCBhY3R1YWxseSBtYWtlIHRoaW5nc1xuICAvLyB3b3JzZSBvbiBJRSwgc28gd2UgZG9uJ3QgaW5jbHVkZSB0aGVtIGluIHRoZSBJRSB2ZXJzaW9uLlxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpXG4gICAgICAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG5cbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuLy8gU2FtZSBhcyBtaXhpbiBhYm92ZSwgYnV0IG9taXRzIHRoZSB0cmFuc2xhdGVaIGZvciBwcmludGluZyBwdXJwb3Nlcy5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgLy8gVGhpcyByZXN1bHRzIGluIGEgc21hbGwgaml0dGVyIGFmdGVyIHRoZSBsYWJlbCBmbG9hdHMgb24gRmlyZWZveCwgd2hpY2ggdGhlXG4gIC8vIHRyYW5zbGF0ZVogZml4ZXMuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlKVxuICAgICAgICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICAvLyBUaGUgdHJpY2tzIGFib3ZlIHVzZWQgdG8gc21vb3RoIG91dCB0aGUgYW5pbWF0aW9uIG9uIGNocm9tZSBhbmQgZmlyZWZveCBhY3R1YWxseSBtYWtlIHRoaW5nc1xuICAvLyB3b3JzZSBvbiBJRSwgc28gd2UgZG9uJ3QgaW5jbHVkZSB0aGVtIGluIHRoZSBJRSB2ZXJzaW9uLlxuICAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIHRoZSB0b3Agb2YgdGhlIGxpbmUgYW5kIHRoZSB0b3Agb2YgdGhlIGFjdHVhbCB0ZXh0XG4gIC8vIChhcyBhIGZyYWN0aW9uIG9mIHRoZSBmb250LXNpemUpLlxuICAkbGluZS1zcGFjaW5nOiAoJGxpbmUtaGVpZ2h0IC0gMSkgLyAyO1xuICAvLyBUaGUgcGFkZGluZyBvbiB0aGUgaW5maXguIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgc2VlbSB0byBtZWFzdXJlIGZyb20gdGhlIGVkZ2VcbiAgLy8gb2YgdGhlIHRleHQgaXRzZWxmLCBub3QgdGhlIGVkZ2Ugb2YgdGhlIGxpbmU7IHRoZXJlZm9yZSB3ZSBzdWJ0cmFjdCBvZmYgdGhlIGxpbmUgc3BhY2luZy5cbiAgJGluZml4LXBhZGRpbmc6IDAuNWVtIC0gJGxpbmUtc3BhY2luZztcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuIFdlIGFnYWluIG5lZWQgdG8gc3VidHJhY3Qgb2ZmIHRoZSBsaW5lIHNwYWNpbmcgc2luY2UgdGhlIG1vY2tzIG1lYXN1cmUgdG8gdGhlIGVkZ2Ugb2YgdGhlXG4gIC8vIHRleHQsIG5vdCB0aGUgIGVkZ2Ugb2YgdGhlIGxpbmUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogMC41ZW0gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGUgLSAoJGxpbmUtc3BhY2luZyAqIDIpO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCB3aWxsIHJlbHkgb24gQXV0b2ZpbGxNb25pdG9yIGluc3RlYWQuXG4gICAgICAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIC8vIFdlIHdhbnQgdGhlIHVuZGVybGluZSB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50LlxuICAgICAgYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgICAgbWFyZ2luLXRvcDogJHN1YnNjcmlwdC1tYXJnaW4tdG9wO1xuXG4gICAgICAvLyBXZSB3YW50IHRoZSBzdWJzY3JpcHQgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudCAoYWRqdXN0ZWQgZm9yIHRoZSBzbWFsbGVyIGZvbnQgc2l6ZSk7XG4gICAgICB0b3A6IGNhbGMoMTAwJSAtICN7JHdyYXBwZXItcGFkZGluZy1ib3R0b20gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGV9KTtcbiAgICB9XG4gIH1cblxuICAvLyB0cmFuc2xhdGVaIGNhdXNlcyB0aGUgbGFiZWwgdG8gbm90IGFwcGVhciB3aGlsZSBwcmludGluZywgc28gd2Ugb3ZlcnJpZGUgaXQgdG8gbm90XG4gIC8vIGFwcGx5IHRyYW5zbGF0ZVogd2hpbGUgcHJpbnRpbmdcbiAgQG1lZGlhIHByaW50IHtcbiAgICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCB3aWxsIHJlbHkgb24gQXV0b2ZpbGxNb25pdG9yIGluc3RlYWQuXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIG91dGxpbmUgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICRsYWJlbC1kaXNhYmxlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgJG91dGxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMywgMC4xMikpO1xuICAkb3V0bGluZS1jb2xvci1ob3ZlcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMSwgMC44NykpO1xuICAkb3V0bGluZS1jb2xvci1wcmltYXJ5OiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAkb3V0bGluZS1jb2xvci1hY2NlbnQ6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgJG91dGxpbmUtY29sb3Itd2FybjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgJG91dGxpbmUtY29sb3ItZGlzYWJsZWQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMTUsIDAuMDYpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgICBjb2xvcjogJG91dGxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWhvdmVyO1xuICAgIH1cblxuICAgICYubWF0LWZvY3VzZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItcHJpbWFyeTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWFjY2VudDtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENsYXNzIHJlcGVhdGVkIHNvIHRoYXQgcnVsZSBpcyBzcGVjaWZpYyBlbm91Z2ggdG8gb3ZlcnJpZGUgZm9jdXNlZCBhY2NlbnQgY29sb3IgY2FzZS5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRsYWJlbC1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItZGlzYWJsZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGUpXG4gIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIHBhZGRpbmcgYWJvdmUgYW5kIGJlbG93IHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmc6IDFlbTtcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogMC41ZW0gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtd3JhcHBlciB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgc3Vic2NyaXB0LCBzaW5jZSBpdCdzXG4gIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZC4gVGhpcyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBzdWJzY3JpcHQncyBtYXJnaW4gYW5kIGxpbmUtaGVpZ2h0LCBidXQgd2VcbiAgLy8gbmVlZCB0byBtdWx0aXBseSBieSB0aGUgc3Vic2NyaXB0IGZvbnQgc2NhbGUgZmFjdG9yIHNpbmNlIHRoZSB3cmFwcGVyIGhhcyBhIGxhcmdlciBmb250IHNpemUuXG4gICR3cmFwcGVyLXBhZGRpbmctYm90dG9tOiAoJHN1YnNjcmlwdC1tYXJnaW4tdG9wICsgJGxpbmUtaGVpZ2h0KSAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIGFtb3VudCB3ZSBvZmZzZXQgdGhlIGxhYmVsIGZyb20gdGhlIGlucHV0IHRleHQgaW4gdGhlIG91dGxpbmUgYXBwZWFyYW5jZS5cbiAgJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ6IC0wLjI1ZW07XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDAgJGluZml4LXBhZGRpbmcgMDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nO1xuICAgICAgbWFyZ2luLXRvcDogJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtb3V0bGluZS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nICsgJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZyArICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgc3RhbmRhcmQgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICR1bmRlcmxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC40MikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkdW5kZXJsaW5lLWNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXR5cG9ncmFwaHkoJGNvbmZpZykge31cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBhcHBseSB0byBhbGwgYXBwZWFyYW5jZXMgb2YgdGhlIGZvcm0tZmllbGQuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gIC8vIExhYmVsIGNvbG9ycy4gUmVxdWlyZWQgaXMgdXNlZCBmb3IgdGhlIGAqYCBzdGFyIHNob3duIGluIHRoZSBsYWJlbC5cbiAgJGxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0LCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjYpKTtcbiAgJGZvY3VzZWQtbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICRyZXF1aXJlZC1sYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuXG4gIC8vIFVuZGVybGluZSBjb2xvcnMuXG4gICR1bmRlcmxpbmUtY29sb3ItYmFzZTogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMSwgMC44NykpO1xuICAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAkdW5kZXJsaW5lLWNvbG9yLXdhcm46IG1hdC1jb2xvcigkd2Fybik7XG4gICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWhpbnQge1xuICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogJGZvY3VzZWQtbGFiZWwtY29sb3I7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gICAgY29sb3I6ICRyZXF1aXJlZC1sYWJlbC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYmFzZTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I7XG5cbiAgICAgICYubWF0LWFjY2VudCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci1hY2NlbnQ7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLy8gU3R5bGluZyBmb3IgdGhlIGVycm9yIHN0YXRlIG9mIHRoZSBmb3JtIGZpZWxkLiBOb3RlIHRoYXQgd2hpbGUgdGhlIHNhbWUgY2FuIGJlXG4gIC8vIGFjaGlldmVkIHdpdGggdGhlIG5nLSogY2xhc3Nlcywgd2UgdXNlIHRoaXMgYXBwcm9hY2ggaW4gb3JkZXIgdG8gZW5zdXJlIHRoYXQgdGhlIHNhbWVcbiAgLy8gbG9naWMgaXMgdXNlZCB0byBzdHlsZSB0aGUgZXJyb3Igc3RhdGUgYW5kIHRvIHNob3cgdGhlIGVycm9yIG1lc3NhZ2VzLlxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG5cbiAgICAgICYubWF0LWFjY2VudCxcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICAgICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsXG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtYWNjZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAubWF0LWVycm9yIHtcbiAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtbGVnYWN5LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWZpbGwtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGVtZSgkdGhlbWUpO1xufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtZGVkdXBlKVxuICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIHByZWZpeCBhbmQgc3VmZml4IGljb25zLlxuICAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGU6IDEuNTtcblxuICAvLyBUaGUgcGFkZGluZyBvbiB0aGUgaW5maXguIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLlxuICAkaW5maXgtcGFkZGluZzogMC41ZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIEZvbnQgc2l6ZSB0byB1c2UgZm9yIHRoZSBsYWJlbCBhbmQgc3Vic2NyaXB0IHRleHQuXG4gICRzdWJzY3JpcHQtZm9udC1zaXplOiAkc3Vic2NyaXB0LWZvbnQtc2NhbGUgKiAxMDAlO1xuICAvLyBGb250IHNpemUgdG8gdXNlIGZvciB0aGUgZm9yIHRoZSBwcmVmaXggYW5kIHN1ZmZpeCBpY29ucy5cbiAgJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNpemU6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDEwMCU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgaW5wdXQpO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1wcmVmaXgsXG4gIC5tYXQtZm9ybS1maWVsZC1zdWZmaXgge1xuICAgIC8vIEFsbG93IGljb25zIGluIGEgcHJlZml4IG9yIHN1ZmZpeCB0byBhZGFwdCB0byB0aGUgY29ycmVjdCBzaXplLlxuICAgIC5tYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zaXplO1xuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICB9XG5cbiAgICAvLyBBbGxvdyBpY29uIGJ1dHRvbnMgaW4gYSBwcmVmaXggb3Igc3VmZml4IHRvIGFkYXB0IHRvIHRoZSBjb3JyZWN0IHNpemUuXG4gICAgLm1hdC1pY29uLWJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDFlbTtcbiAgICAgIHdpZHRoOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxZW07XG5cbiAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgIGhlaWdodDogJGxpbmUtaGVpZ2h0ICogMWVtO1xuICAgICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMDtcbiAgICAvLyBUaHJvd3Mgb2ZmIHRoZSBiYXNlbGluZSBpZiB3ZSBkbyBpdCBhcyBhIHJlYWwgbWFyZ2luLCBzbyB3ZSBkbyBpdCBhcyBhIGJvcmRlciBpbnN0ZWFkLlxuICAgIGJvcmRlci10b3A6ICRpbmZpeC1tYXJnaW4tdG9wIHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgIH1cblxuICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgICB0b3A6IC0kaW5maXgtbWFyZ2luLXRvcDtcbiAgICBwYWRkaW5nLXRvcDogJGluZml4LW1hcmdpbi10b3A7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIC8vIFdlIHdhbnQgdGhlIHVuZGVybGluZSB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudC5cbiAgICBib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgICBmb250LXNpemU6ICRzdWJzY3JpcHQtZm9udC1zaXplO1xuICAgIG1hcmdpbi10b3A6ICRzdWJzY3JpcHQtbWFyZ2luLXRvcDtcblxuICAgIC8vIFdlIHdhbnQgdGhlIHN1YnNjcmlwdCB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudCAoYWRqdXN0ZWQgZm9yIHRoZSBzbWFsbGVyIGZvbnQgc2l6ZSk7XG4gICAgdG9wOiBjYWxjKDEwMCUgLSAjeyR3cmFwcGVyLXBhZGRpbmctYm90dG9tIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlfSk7XG4gIH1cblxuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtZmlsbC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG59XG5cblxuXG5cblxuQG1peGluIG1hdC10cmVlLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdHJlZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC10cmVlLW5vZGUsXG4gIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC10cmVlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRyZWUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXRyZWUtbm9kZSxcbiAgLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIHtcbiAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cbi8vIEluY2x1ZGVzIGFsbCBvZiB0aGUgdHlwb2dyYXBoaWMgc3R5bGVzLlxuQG1peGluIGFuZ3VsYXItbWF0ZXJpYWwtdHlwb2dyYXBoeSgkY29uZmlnOiBudWxsKSB7XG4gIEBpZiAkY29uZmlnID09IG51bGwge1xuICAgICRjb25maWc6IG1hdC10eXBvZ3JhcGh5LWNvbmZpZygpO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWJhZGdlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1iYXNlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1hdXRvY29tcGxldGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJvdHRvbS1zaGVldC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1jYXJkLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1jaGVja2JveC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2hpcHMtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRhYmxlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1kYXRlcGlja2VyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1kaWFsb2ctdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWV4cGFuc2lvbi1wYW5lbC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZ3JpZC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1pY29uLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1pbnB1dC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtbWVudS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcGFnaW5hdG9yLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1iYXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLXNwaW5uZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXJhZGlvLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zZWxlY3QtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNpZGVuYXYtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zdGVwcGVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zb3J0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10YWJzLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10b29sYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10b29sdGlwLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1vcHRpb24tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGdyb3VwLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zbmFjay1iYXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRyZWUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbn1cblxuXG4vLyBNaXhpbiB0aGF0IHJlbmRlcnMgYWxsIG9mIHRoZSBjb3JlIHN0eWxlcyB0aGF0IGFyZSBub3QgdGhlbWUtZGVwZW5kZW50LlxuQG1peGluIG1hdC1jb3JlKCR0eXBvZ3JhcGh5LWNvbmZpZzogbnVsbCkge1xuICBAaW5jbHVkZSBhbmd1bGFyLW1hdGVyaWFsLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHktY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXJpcHBsZSgpO1xuICBAaW5jbHVkZSBjZGstYTExeSgpO1xuICBAaW5jbHVkZSBjZGstb3ZlcmxheSgpO1xuICBAaW5jbHVkZSBjZGstdGV4dC1maWVsZCgpO1xufVxuXG4vLyBNaXhpbiB0aGF0IHJlbmRlcnMgYWxsIG9mIHRoZSBjb3JlIHN0eWxlcyB0aGF0IGRlcGVuZCBvbiB0aGUgdGhlbWUuXG5AbWl4aW4gbWF0LWNvcmUtdGhlbWUoJHRoZW1lKSB7XG4gIEBpbmNsdWRlIG1hdC1yaXBwbGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGlvbi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtb3B0Z3JvdXAtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXBzZXVkby1jaGVja2JveC10aGVtZSgkdGhlbWUpO1xuXG4gIC8vIFByb3ZpZGVzIGV4dGVybmFsIENTUyBjbGFzc2VzIGZvciBlYWNoIGVsZXZhdGlvbiB2YWx1ZS4gRWFjaCBDU1MgY2xhc3MgaXMgZm9ybWF0dGVkIGFzXG4gIC8vIGBtYXQtZWxldmF0aW9uLXokelZhbHVlYCB3aGVyZSBgJHpWYWx1ZWAgY29ycmVzcG9uZHMgdG8gdGhlIHotc3BhY2UgdG8gd2hpY2ggdGhlIGVsZW1lbnQgaXNcbiAgLy8gZWxldmF0ZWQuXG4gIEBmb3IgJHpWYWx1ZSBmcm9tIDAgdGhyb3VnaCAyNCB7XG4gICAgLiN7JF9tYXQtZWxldmF0aW9uLXByZWZpeH0jeyR6VmFsdWV9IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKCR6VmFsdWUsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gV3JhcHBlciBlbGVtZW50IHRoYXQgcHJvdmlkZXMgdGhlIHRoZW1lIGJhY2tncm91bmQgd2hlbiB0aGUgdXNlcidzIGNvbnRlbnQgaXNuJ3RcbiAgLy8gaW5zaWRlIG9mIGEgYG1hdC1zaWRlbmF2LWNvbnRhaW5lcmAuIE5vdGUgdGhhdCB3ZSBuZWVkIHRvIGV4Y2x1ZGUgdGhlIGFtcGVyc2FuZFxuICAvLyBzZWxlY3RvciBpbiBjYXNlIHRoZSBtaXhpbiBpcyBpbmNsdWRlZCBhdCB0aGUgdG9wIGxldmVsLlxuICAubWF0LWFwcC1iYWNrZ3JvdW5kI3tpZigmLCAnLCAmLm1hdC1hcHAtYmFja2dyb3VuZCcsICcnKX0ge1xuICAgICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAvLyBNYXJrZXIgdGhhdCBpcyB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSB1c2VyIGhhcyBhZGRlZCBhIHRoZW1lIHRvIHRoZWlyIHBhZ2UuXG4gIEBhdC1yb290IHtcbiAgICAubWF0LXRoZW1lLWxvYWRlZC1tYXJrZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1kaXZpZGVyLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZGl2aWRlciB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZGl2aWRlci12ZXJ0aWNhbCB7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIENyZWF0ZSBhIHRoZW1lLlxuQG1peGluIGFuZ3VsYXItbWF0ZXJpYWwtdGhlbWUoJHRoZW1lKSB7XG4gIEBpbmNsdWRlIG1hdC1jb3JlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1hdXRvY29tcGxldGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJhZGdlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1ib3R0b20tc2hlZXQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRvZ2dsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtY2FyZC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtY2hlY2tib3gtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10YWJsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZGF0ZXBpY2tlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZGlhbG9nLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1kaXZpZGVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1leHBhbnNpb24tcGFuZWwtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWdyaWQtbGlzdC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtaWNvbi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtaW5wdXQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWxpc3QtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LW1lbnUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXBhZ2luYXRvci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3MtYmFyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1zcGlubmVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1yYWRpby10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2VsZWN0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zaWRlbmF2LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZS10b2dnbGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc3RlcHBlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc29ydC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdGFicy10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdG9vbGJhci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdG9vbHRpcC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdHJlZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc25hY2stYmFyLXRoZW1lKCR0aGVtZSk7XG59XG4iLCJAaW1wb3J0ICd+QGFuZ3VsYXIvbWF0ZXJpYWwvdGhlbWluZyc7XG5cbi5mYXZvdXJpdGUge1xuICBwYWRkaW5nOiAzcHggMCAwO1xuICBjb2xvcjogbWFwLWdldCgkbWF0LXBpbmssIDUwMCk7XG59XG4iXX0= */';

        /***/
      },

    /***/ './src/app/modules/anime/components/mt-user-anime-list-table/mt-user-anime-list-table.component.ts':
      /*!*********************************************************************************************************!*\
  !*** ./src/app/modules/anime/components/mt-user-anime-list-table/mt-user-anime-list-table.component.ts ***!
  \*********************************************************************************************************/
      /*! exports provided: MtUserAnimeListTableComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MtUserAnimeListTableComponent',
          function() {
            return MtUserAnimeListTableComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material */ './node_modules/@angular/material/esm5/material.es5.js'
        );
        /* harmony import */ var _utils_generic_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../utils/generic.util */ './src/app/utils/generic.util.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var MtUserAnimeListTableComponent = /** @class */ (function() {
          function MtUserAnimeListTableComponent(elementRef) {
            this.elementRef = elementRef;
            this.onEntryUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'EventEmitter'
            ]();
            this.tableRows = [
              'actions',
              'cover-image',
              'title-romaji',
              'format',
              'start-date',
              'genres',
              'score',
              'episodes'
            ];
          }
          MtUserAnimeListTableComponent.prototype.ngAfterViewInit = function() {
            // TODO: Fix ExpressionChangedAfterItHasBeenCheckedError
            this.initializeDataSource();
            this.bindChildComponents();
          };
          MtUserAnimeListTableComponent.prototype.ngOnChanges = function(
            changes
          ) {
            if (this.dataSource && changes.filter) {
              this.dataSource.filter = changes.filter.currentValue;
            }
          };
          MtUserAnimeListTableComponent.prototype.onUpdate = function(
            listEntry
          ) {
            if (listEntry) {
              this.onEntryUpdate.emit(listEntry);
            }
          };
          MtUserAnimeListTableComponent.prototype.onPageChange = function() {
            _utils_generic_util__WEBPACK_IMPORTED_MODULE_2__[
              'GenericUtil'
            ].scrollToRef(this.elementRef);
          };
          MtUserAnimeListTableComponent.prototype.initializeDataSource = function() {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__[
              'MatTableDataSource'
            ](this.tableData);
          };
          MtUserAnimeListTableComponent.prototype.bindChildComponents = function() {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            this.dataSource.sortingDataAccessor = function(
              listEntry,
              property
            ) {
              var anime = listEntry.media;
              return {
                'title-romaji': anime.title.romaji.toLowerCase(),
                format: anime.format.toLowerCase(),
                'start-date': +anime.startDate.year,
                genres: anime.genres.length ? anime.genres[0] : '',
                score: +listEntry.scoreRaw,
                episodes: +anime.episodes
              }[property];
            };
            this.dataSource.filterPredicate = function(listEntry, filter) {
              return listEntry.media.title.romaji
                .trim()
                .toLowerCase()
                .includes(filter.trim().toLowerCase());
            };
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', String)
            ],
            MtUserAnimeListTableComponent.prototype,
            'tableStatus',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Array)
            ],
            MtUserAnimeListTableComponent.prototype,
            'tableData',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Array)
            ],
            MtUserAnimeListTableComponent.prototype,
            'favouriteIDs',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', String)
            ],
            MtUserAnimeListTableComponent.prototype,
            'filter',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata(
                'design:type',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']
              )
            ],
            MtUserAnimeListTableComponent.prototype,
            'onEntryUpdate',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatSort']
              ),
              __metadata(
                'design:type',
                _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatSort']
              )
            ],
            MtUserAnimeListTableComponent.prototype,
            'sort',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatPaginator']
              ),
              __metadata(
                'design:type',
                _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatPaginator']
              )
            ],
            MtUserAnimeListTableComponent.prototype,
            'paginator',
            void 0
          );
          MtUserAnimeListTableComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-user-anime-list-table',
                template: __webpack_require__(
                  /*! ./mt-user-anime-list-table.component.html */ './src/app/modules/anime/components/mt-user-anime-list-table/mt-user-anime-list-table.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./mt-user-anime-list-table.component.scss */ './src/app/modules/anime/components/mt-user-anime-list-table/mt-user-anime-list-table.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef']
              ])
            ],
            MtUserAnimeListTableComponent
          );
          return MtUserAnimeListTableComponent;
        })();

        /***/
      },

    /***/ './src/app/modules/anime/domain/media.domain.ts':
      /*!******************************************************!*\
  !*** ./src/app/modules/anime/domain/media.domain.ts ***!
  \******************************************************/
      /*! exports provided: getFormattedMediaDuration, getDateScalarFromYear, getMediaSortFromSort */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'getFormattedMediaDuration',
          function() {
            return getFormattedMediaDuration;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'getDateScalarFromYear',
          function() {
            return getDateScalarFromYear;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'getMediaSortFromSort',
          function() {
            return getMediaSortFromSort;
          }
        );
        var getFormattedMediaDuration = function(media) {
          return media.duration < 60
            ? media.duration + 'm'
            : Math.floor(media.duration / 60) +
                'h ' +
                (media.duration % 60) +
                'm';
        };
        var getDateScalarFromYear = function(year) {
          return year * 10000;
        };
        var getMediaSortFromSort = function(sort) {
          var directionSuffix = sort.direction === 'desc' ? '_DESC' : '';
          return sort.active.replace(/-/g, '_').toUpperCase() + directionSuffix;
        };

        /***/
      },

    /***/ './src/app/modules/anime/services/anime.service.ts':
      /*!*********************************************************!*\
  !*** ./src/app/modules/anime/services/anime.service.ts ***!
  \*********************************************************/
      /*! exports provided: AnimeService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AnimeService',
          function() {
            return AnimeService;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_store_media_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../shared/store/media.store */ './src/app/modules/shared/store/media.store.ts'
        );
        /* harmony import */ var _api_anime_anime_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../api/anime/anime.api */ './src/app/modules/anime/api/anime/anime.api.ts'
        );
        var __assign =
          (undefined && undefined.__assign) ||
          function() {
            __assign =
              Object.assign ||
              function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                  s = arguments[i];
                  for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
              };
            return __assign.apply(this, arguments);
          };
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var AnimeService = /** @class */ (function() {
          function AnimeService(animeApi, mediaStore) {
            this.animeApi = animeApi;
            this.mediaStore = mediaStore;
          }
          AnimeService.prototype.getAnimeGenres = function() {
            return this.animeApi.queryAnimeGenres();
          };
          AnimeService.prototype.searchAnime = function(query, pageInfo) {
            var _this = this;
            return this.animeApi.queryAnimeSearch(query, pageInfo).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['flatMap'])(
                function(response) {
                  return _this
                    .getAnimeFromIds(
                      response.media.map(function(media) {
                        return media.id;
                      })
                    )
                    .pipe(
                      Object(
                        rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map']
                      )(function(animeList) {
                        return __assign({}, response, { media: animeList });
                      })
                    );
                }
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(
                function(pageData) {
                  return _this.mediaStore.storeAnime(pageData.media);
                }
              )
            );
          };
          AnimeService.prototype.getAnimeList = function(user) {
            var _this = this;
            return this.animeApi.queryAnimeList(user).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(
                function(listEntriesDictionary) {
                  return _this.mediaStore.storeAnime(
                    Object.keys(listEntriesDictionary)
                      .map(function(status) {
                        return listEntriesDictionary[status].map(function(
                          listEntry
                        ) {
                          return listEntry.media;
                        });
                      })
                      .reduce(function(mediaList, media) {
                        return mediaList.concat(media);
                      })
                  );
                }
              )
            );
          };
          AnimeService.prototype.getAnimeListMediaIdsByStatus = function(user) {
            return this.animeApi.queryAnimeListMediaIdsByStatus(user);
          };
          AnimeService.prototype.getRecentlyUpdatedAnime = function(
            user,
            pageInfo
          ) {
            var _this = this;
            return this.animeApi.queryRecentlyUpdatedAnime(user, pageInfo).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['flatMap'])(
                function(response) {
                  return _this
                    .getAnimeFromIds(
                      response.mediaList.map(function(listEntry) {
                        return listEntry.media.id;
                      })
                    )
                    .pipe(
                      Object(
                        rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map']
                      )(function(animeList) {
                        return __assign({}, response, {
                          mediaList: response.mediaList.map(function(
                            listEntry
                          ) {
                            return __assign({}, listEntry, {
                              media: animeList.find(function(anime) {
                                return anime.id === listEntry.media.id;
                              })
                            });
                          })
                        });
                      })
                    );
                }
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(
                function(pageData) {
                  return _this.mediaStore.storeAnime(
                    pageData.mediaList.map(function(listEntry) {
                      return listEntry.media;
                    })
                  );
                }
              )
            );
          };
          AnimeService.prototype.getRecentlyFinishedAiringAnime = function(
            query,
            pageInfo
          ) {
            var _this = this;
            return this.animeApi
              .queryRecentlyFinishedAiringAnime(query, pageInfo)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['flatMap'])(
                  function(response) {
                    return _this
                      .getAnimeFromIds(
                        response.media.map(function(media) {
                          return media.id;
                        })
                      )
                      .pipe(
                        Object(
                          rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map']
                        )(function(animeList) {
                          return __assign({}, response, { media: animeList });
                        })
                      );
                  }
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(
                  function(pageData) {
                    return _this.mediaStore.storeAnime(pageData.media);
                  }
                )
              );
          };
          AnimeService.prototype.getRelatedAnimeMedia = function(user) {
            var _this = this;
            return this.animeApi.queryRelatedAnimeMedia(user).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(
                function(mediaList) {
                  return _this.mediaStore.storeAnime(mediaList);
                }
              )
            );
          };
          AnimeService.prototype.getAnimeListFavouriteIDs = function(
            user,
            callback
          ) {
            return this.animeApi.queryAnimeListFavouriteIDs(user, callback);
          };
          AnimeService.prototype.saveAnimeListEntry = function(listEntry) {
            return this.animeApi.saveAnimeListEntry(listEntry);
          };
          AnimeService.prototype.deleteAnimeListEntry = function(listEntry) {
            return this.animeApi.deleteAnimeListEntry(listEntry);
          };
          AnimeService.prototype.toggleFavouriteAnimeListEntry = function(
            listEntry
          ) {
            return this.animeApi.toggleAnimeFavouriteEntry(listEntry);
          };
          AnimeService.prototype.getAnimeFromIds = function(mediaIds) {
            var animeDictionary = this.mediaStore.getAnimeDictionary();
            var storeIds = Object.keys(animeDictionary).map(function(key) {
              return parseInt(key);
            });
            var missingIds = mediaIds.filter(function(id) {
              return storeIds.indexOf(id) < 0;
            });
            return missingIds.length
              ? this.animeApi.queryAnimeFromIds(mediaIds)
              : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['of'])(
                  mediaIds.map(function(id) {
                    return animeDictionary[id];
                  })
                );
          };
          AnimeService = __decorate(
            [
              Object(
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable']
              )(),
              __metadata('design:paramtypes', [
                _api_anime_anime_api__WEBPACK_IMPORTED_MODULE_4__['AnimeApi'],
                _shared_store_media_store__WEBPACK_IMPORTED_MODULE_3__[
                  'MediaStore'
                ]
              ])
            ],
            AnimeService
          );
          return AnimeService;
        })();

        /***/
      },

    /***/ './src/app/modules/material/material.module.ts':
      /*!*****************************************************!*\
  !*** ./src/app/modules/material/material.module.ts ***!
  \*****************************************************/
      /*! exports provided: MaterialModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MaterialModule',
          function() {
            return MaterialModule;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material */ './node_modules/@angular/material/esm5/material.es5.js'
        );
        /* harmony import */ var _providers_mat_paginator_i18n_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./providers/mat-paginator-i18n.provider */ './src/app/modules/material/providers/mat-paginator-i18n.provider.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };

        var modules = [
          _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatButtonModule'],
          _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatCardModule'],
          _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatCheckboxModule'],
          _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatChipsModule'],
          _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatDatepickerModule'],
          _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatDatepickerModule'],
          _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatDividerModule'],
          _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatExpansionModule'],
          _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatGridListModule'],
          _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatIconModule'],
          _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatInputModule'],
          _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatListModule'],
          _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatMenuModule'],
          _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatNativeDateModule'],
          _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatPaginatorModule'],
          _angular_material__WEBPACK_IMPORTED_MODULE_1__[
            'MatProgressBarModule'
          ],
          _angular_material__WEBPACK_IMPORTED_MODULE_1__[
            'MatProgressSpinnerModule'
          ],
          _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatRadioModule'],
          _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatSelectModule'],
          _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatSliderModule'],
          _angular_material__WEBPACK_IMPORTED_MODULE_1__[
            'MatSlideToggleModule'
          ],
          _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatSnackBarModule'],
          _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatSortModule'],
          _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatTableModule'],
          _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatToolbarModule'],
          _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatTooltipModule']
        ];
        var MaterialModule = /** @class */ (function() {
          function MaterialModule() {}
          MaterialModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                imports: modules,
                exports: modules,
                providers: [
                  {
                    provide:
                      _angular_material__WEBPACK_IMPORTED_MODULE_1__[
                        'MatPaginatorIntl'
                      ],
                    useClass:
                      _providers_mat_paginator_i18n_provider__WEBPACK_IMPORTED_MODULE_2__[
                        'MatPaginatorI18n'
                      ]
                  }
                ]
              })
            ],
            MaterialModule
          );
          return MaterialModule;
        })();

        /***/
      },

    /***/ './src/app/modules/material/providers/mat-paginator-i18n.provider.ts':
      /*!***************************************************************************!*\
  !*** ./src/app/modules/material/providers/mat-paginator-i18n.provider.ts ***!
  \***************************************************************************/
      /*! exports provided: MatPaginatorI18n */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MatPaginatorI18n',
          function() {
            return MatPaginatorI18n;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material */ './node_modules/@angular/material/esm5/material.es5.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        var __extends =
          (undefined && undefined.__extends) ||
          (function() {
            var extendStatics = function(d, b) {
              extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype =
                b === null
                  ? Object.create(b)
                  : ((__.prototype = b.prototype), new __());
            };
          })();
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var MatPaginatorI18n = /** @class */ (function(_super) {
          __extends(MatPaginatorI18n, _super);
          function MatPaginatorI18n(translateService) {
            var _this = _super.call(this) || this;
            _this.translateService = translateService;
            _this.itemsPerPageLabel = _this.translateService.instant(
              'matPaginator.itemsPerPageLabel'
            );
            _this.nextPageLabel = _this.translateService.instant(
              'matPaginator.nextPageLabel'
            );
            _this.previousPageLabel = _this.translateService.instant(
              'matPaginator.previousPageLabel'
            );
            _this.firstPageLabel = _this.translateService.instant(
              'matPaginator.firstPageLabel'
            );
            _this.lastPageLabel = _this.translateService.instant(
              'matPaginator.lastPageLabel'
            );
            _this.getRangeLabel = function(page, pageSize, length) {
              var firstResultIndex = page * pageSize;
              return _this.translateService.instant('matPaginator.rangeLabel', {
                firstResult: firstResultIndex + 1,
                lastResult: Math.min(firstResultIndex + pageSize, length),
                totalCount: length
              });
            };
            return _this;
          }
          MatPaginatorI18n = __decorate(
            [
              Object(
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable']
              )(),
              __metadata('design:paramtypes', [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__[
                  'TranslateService'
                ]
              ])
            ],
            MatPaginatorI18n
          );
          return MatPaginatorI18n;
        })(_angular_material__WEBPACK_IMPORTED_MODULE_1__['MatPaginatorIntl']);

        /***/
      },

    /***/ './src/app/modules/shared/api/api.ts':
      /*!*******************************************!*\
  !*** ./src/app/modules/shared/api/api.ts ***!
  \*******************************************/
      /*! exports provided: AniListApi */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AniListApi',
          function() {
            return AniListApi;
          }
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../app.constants */ './src/app/app.constants.ts'
        );
        var __assign =
          (undefined && undefined.__assign) ||
          function() {
            __assign =
              Object.assign ||
              function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                  s = arguments[i];
                  for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
              };
            return __assign.apply(this, arguments);
          };

        var AniListApi = /** @class */ (function() {
          function AniListApi(httpClient, authStore) {
            this.httpClient = httpClient;
            this.authStore = authStore;
            this.loggingEnabled = false;
            this.apiUrl = _app_constants__WEBPACK_IMPORTED_MODULE_2__['apiUrl'];
          }
          AniListApi.prototype.getRequestOptions = function() {
            var accessToken = this.authStore.getAccessToken();
            return {
              headers: accessToken
                ? { Authorization: 'Bearer ' + accessToken }
                : {}
            };
          };
          AniListApi.prototype.getPageOptions = function(pageOptions) {
            return {
              page: pageOptions
                ? pageOptions.pageIndex >= 1
                  ? pageOptions.pageIndex
                  : 1
                : 1,
              perPage: pageOptions ? pageOptions.perPage || 10 : 1
            };
          };
          AniListApi.prototype.postGraphQlRequest = function(query, variables) {
            var parsedVariables = __assign({}, variables);
            if (parsedVariables) {
              Object.keys(parsedVariables).forEach(function(key) {
                var value = parsedVariables[key];
                if (
                  value === undefined ||
                  value === null ||
                  (['string', 'object'].includes(typeof value) &&
                    value.length === 0)
                ) {
                  delete parsedVariables[key];
                }
              });
            }
            if (this.loggingEnabled) {
              console.debug('query:', query.replace(/\n\s*/g, '\n'));
              console.debug('variables:', parsedVariables);
            }
            return this.httpClient
              .post(
                this.apiUrl,
                {
                  query: query,
                  variables: parsedVariables
                },
                this.getRequestOptions()
              )
              .pipe(this.mapObjectErrorToStringError());
          };
          AniListApi.prototype.isValidResponse = function(response) {
            return !!this.getResponseData(response);
          };
          AniListApi.prototype.getResponseData = function(response) {
            return !!response && response.data;
          };
          AniListApi.prototype.mapObjectErrorToStringError = function() {
            return Object(
              rxjs_operators__WEBPACK_IMPORTED_MODULE_1__['catchError']
            )(function(error) {
              return Object(
                rxjs__WEBPACK_IMPORTED_MODULE_0__['throwError']
              )(JSON.stringify(error, undefined, 2));
            });
          };
          return AniListApi;
        })();

        /***/
      },

    /***/ './src/app/modules/shared/api/auth/auth.api.ts':
      /*!*****************************************************!*\
  !*** ./src/app/modules/shared/api/auth/auth.api.ts ***!
  \*****************************************************/
      /*! exports provided: AuthApi */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AuthApi',
          function() {
            return AuthApi;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _anime_api_anime_anime_api_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../anime/api/anime/anime-api.queries */ './src/app/modules/anime/api/anime/anime-api.queries.ts'
        );
        /* harmony import */ var _store_auth_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../store/auth.store */ './src/app/modules/shared/store/auth.store.ts'
        );
        /* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../api */ './src/app/modules/shared/api/api.ts'
        );
        var __extends =
          (undefined && undefined.__extends) ||
          (function() {
            var extendStatics = function(d, b) {
              extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype =
                b === null
                  ? Object.create(b)
                  : ((__.prototype = b.prototype), new __());
            };
          })();
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var AuthApi = /** @class */ (function(_super) {
          __extends(AuthApi, _super);
          function AuthApi(httpClient, authStore) {
            var _this = _super.call(this, httpClient, authStore) || this;
            _this.httpClient = httpClient;
            _this.authStore = authStore;
            return _this;
          }
          AuthApi.prototype.queryUser = function() {
            var _this = this;
            return this.postGraphQlRequest(
              _anime_api_anime_anime_api_queries__WEBPACK_IMPORTED_MODULE_3__[
                'userQuery'
              ]
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(
                function(response) {
                  return _this.getResponseData(response).Viewer;
                }
              )
            );
          };
          AuthApi = __decorate(
            [
              Object(
                _angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable']
              )(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _store_auth_store__WEBPACK_IMPORTED_MODULE_4__['AuthStore']
              ])
            ],
            AuthApi
          );
          return AuthApi;
        })(_api__WEBPACK_IMPORTED_MODULE_5__['AniListApi']);

        /***/
      },

    /***/ './src/app/modules/shared/components/fa-icon/fa-icon.component.html':
      /*!**************************************************************************!*\
  !*** ./src/app/modules/shared/components/fa-icon/fa-icon.component.html ***!
  \**************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          "<i [ngClass]=\"[type || 'fas', 'fa-' + name, iconClass || '']\"></i>\n";

        /***/
      },

    /***/ './src/app/modules/shared/components/fa-icon/fa-icon.component.scss':
      /*!**************************************************************************!*\
  !*** ./src/app/modules/shared/components/fa-icon/fa-icon.component.scss ***!
  \**************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvZmEtaWNvbi9mYS1pY29uLmNvbXBvbmVudC5zY3NzIn0= */';

        /***/
      },

    /***/ './src/app/modules/shared/components/fa-icon/fa-icon.component.ts':
      /*!************************************************************************!*\
  !*** ./src/app/modules/shared/components/fa-icon/fa-icon.component.ts ***!
  \************************************************************************/
      /*! exports provided: FaIconComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'FaIconComponent',
          function() {
            return FaIconComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var FaIconComponent = /** @class */ (function() {
          function FaIconComponent() {}
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', String)
            ],
            FaIconComponent.prototype,
            'type',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', String)
            ],
            FaIconComponent.prototype,
            'name',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', String)
            ],
            FaIconComponent.prototype,
            'iconClass',
            void 0
          );
          FaIconComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'fa-icon',
                template: __webpack_require__(
                  /*! ./fa-icon.component.html */ './src/app/modules/shared/components/fa-icon/fa-icon.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./fa-icon.component.scss */ './src/app/modules/shared/components/fa-icon/fa-icon.component.scss'
                  )
                ]
              })
            ],
            FaIconComponent
          );
          return FaIconComponent;
        })();

        /***/
      },

    /***/ './src/app/modules/shared/components/modal/mt-modal-content/mt-modal-content.component.html':
      /*!**************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/modal/mt-modal-content/mt-modal-content.component.html ***!
  \**************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="content">\n  <ng-content></ng-content>\n</div>\n';

        /***/
      },

    /***/ './src/app/modules/shared/components/modal/mt-modal-content/mt-modal-content.component.scss':
      /*!**************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/modal/mt-modal-content/mt-modal-content.component.scss ***!
  \**************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\n:host > .content {\n  flex: 1;\n  max-height: calc(100vh - 70px - 84px - 1px * 2);\n  overflow-y: auto;\n  box-sizing: border-box; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9tdC1tb2RhbC1jb250ZW50L1o6XFxUeHVzXFxQcm9qZWN0c1xcd2ViXFx1bm9mZmljaWFsLW5nNS1hbmlsaXN0LWNsaWVudC9zcmNcXGFwcFxcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9tdC1tb2RhbC1jb250ZW50L1o6XFxUeHVzXFxQcm9qZWN0c1xcd2ViXFx1bm9mZmljaWFsLW5nNS1hbmlsaXN0LWNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcc2hhcmVkXFxjb21wb25lbnRzXFxtb2RhbFxcbXQtbW9kYWwtY29udGVudFxcbXQtbW9kYWwtY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFBO0FBWUEsZUFBQTtBQVFBLGlCQUFBO0FBU0EsYUFBQTtBQUlBLFdBQUE7QUFJQSxZQUFBO0FBT0EsYUFBQTtBQzFDQTtFQUVJLE9BQU87RUFDUCwrQ0FBeUc7RUFDekcsZ0JBQWdCO0VBQ2hCLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9tdC1tb2RhbC1jb250ZW50L210LW1vZGFsLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzcGFjaW5nICovXG4kc3BhY2luZy14eHh4czogMnB4O1xuJHNwYWNpbmcteHh4czogNHB4O1xuJHNwYWNpbmcteHhzOiA4cHg7XG4kc3BhY2luZy14czogMTZweDtcbiRzcGFjaW5nLXM6IDI0cHg7XG4kc3BhY2luZy1tOiAzMnB4O1xuJHNwYWNpbmctbDogNDhweDtcbiRzcGFjaW5nLXhsOiA2NHB4O1xuJHNwYWNpbmcteHhsOiA5NnB4O1xuJHNwYWNpbmcteHh4bDogMTI4cHg7XG5cbi8qIGZvbnQgc2l6ZXMgKi9cbiRmb250LXNpemUteHM6IDEycHg7XG4kZm9udC1zaXplLXM6IDE0cHg7XG4kZm9udC1zaXplLW06IDE2cHg7XG4kZm9udC1zaXplLWw6IDIwcHg7XG4kZm9udC1zaXplLXhsOiAyNHB4O1xuJGZvbnQtc2l6ZS14eGw6IDI4cHg7XG5cbi8qIGRldmljZSBzaXplcyAqL1xuJHNjcmVlbi14eHhzOiAzMjBweDtcbiRzY3JlZW4teHhzOiA0ODBweDtcbiRzY3JlZW4teHM6IDU3NnB4O1xuJHNjcmVlbi1zOiA3NjhweDtcbiRzY3JlZW4tbTogMTAyNHB4O1xuJHNjcmVlbi1sOiAxMzYwcHg7XG4kc2NyZWVuLXhsOiAxOTIwcHg7XG5cbi8qIG1hdGVyaWFsICovXG4kbWF0LXRvb2xiYXItaGVpZ2h0OiA2NHB4O1xuJG1hdC1zcGlubmVyLXNpemU6IDEyOHB4O1xuXG4vKiBtb2RhbHMgKi9cbiRtb2RhbC1oZWFkZXItaGVpZ2h0OiA3MHB4O1xuJG1vZGFsLWZvb3Rlci1oZWlnaHQ6IDg0cHg7XG5cbi8qIGdlbmVyaWMgKi9cbiRwYWdlLXBhZGRpbmc6ICRzcGFjaW5nLW07XG4kY2FyZC1wYWRkaW5nOiAkc3BhY2luZy1zO1xuJGV4cGFuc2lvbi1wYW5lbC1wYWRkaW5nOiAkc3BhY2luZy1zO1xuJG1heC1pbnB1dC1zaXplOiA2NDBweDtcbiRzZXBhcmF0b3ItdGhpY2tuZXNzOiAxcHg7XG5cbi8qIHNwZWNpZmljICovXG4kZm9vdGVyLWhlaWdodDogMTAzcHg7XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xuXG46aG9zdCB7XG4gID4gLmNvbnRlbnQge1xuICAgIGZsZXg6IDE7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtICN7JG1vZGFsLWhlYWRlci1oZWlnaHR9IC0gI3skbW9kYWwtZm9vdGVyLWhlaWdodH0gLSAjeyRzZXBhcmF0b3ItdGhpY2tuZXNzfSAqIDIpO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxufVxuIl19 */';

        /***/
      },

    /***/ './src/app/modules/shared/components/modal/mt-modal-content/mt-modal-content.component.ts':
      /*!************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/modal/mt-modal-content/mt-modal-content.component.ts ***!
  \************************************************************************************************/
      /*! exports provided: MtModalContentComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MtModalContentComponent',
          function() {
            return MtModalContentComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };

        var MtModalContentComponent = /** @class */ (function() {
          function MtModalContentComponent() {}
          MtModalContentComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-modal-content',
                template: __webpack_require__(
                  /*! ./mt-modal-content.component.html */ './src/app/modules/shared/components/modal/mt-modal-content/mt-modal-content.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./mt-modal-content.component.scss */ './src/app/modules/shared/components/modal/mt-modal-content/mt-modal-content.component.scss'
                  )
                ]
              })
            ],
            MtModalContentComponent
          );
          return MtModalContentComponent;
        })();

        /***/
      },

    /***/ './src/app/modules/shared/components/modal/mt-modal-footer/mt-modal-footer.component.html':
      /*!************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/modal/mt-modal-footer/mt-modal-footer.component.html ***!
  \************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<mat-divider></mat-divider>\n\n<div class="footer no-vertical-padding">\n  <div class="full-width text-center">\n    <ng-content></ng-content>\n  </div>\n</div>\n';

        /***/
      },

    /***/ './src/app/modules/shared/components/modal/mt-modal-footer/mt-modal-footer.component.scss':
      /*!************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/modal/mt-modal-footer/mt-modal-footer.component.scss ***!
  \************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\n:host > .footer {\n  height: 84px;\n  display: flex;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9tdC1tb2RhbC1mb290ZXIvWjpcXFR4dXNcXFByb2plY3RzXFx3ZWJcXHVub2ZmaWNpYWwtbmc1LWFuaWxpc3QtY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL210LW1vZGFsLWZvb3Rlci9aOlxcVHh1c1xcUHJvamVjdHNcXHdlYlxcdW5vZmZpY2lhbC1uZzUtYW5pbGlzdC1jbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXHNoYXJlZFxcY29tcG9uZW50c1xcbW9kYWxcXG10LW1vZGFsLWZvb3RlclxcbXQtbW9kYWwtZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQUE7QUFZQSxlQUFBO0FBUUEsaUJBQUE7QUFTQSxhQUFBO0FBSUEsV0FBQTtBQUlBLFlBQUE7QUFPQSxhQUFBO0FDMUNBO0VBRUksWUQrQnNCO0VDOUJ0QixhQUFhO0VBQ2IsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL210LW1vZGFsLWZvb3Rlci9tdC1tb2RhbC1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzcGFjaW5nICovXG4kc3BhY2luZy14eHh4czogMnB4O1xuJHNwYWNpbmcteHh4czogNHB4O1xuJHNwYWNpbmcteHhzOiA4cHg7XG4kc3BhY2luZy14czogMTZweDtcbiRzcGFjaW5nLXM6IDI0cHg7XG4kc3BhY2luZy1tOiAzMnB4O1xuJHNwYWNpbmctbDogNDhweDtcbiRzcGFjaW5nLXhsOiA2NHB4O1xuJHNwYWNpbmcteHhsOiA5NnB4O1xuJHNwYWNpbmcteHh4bDogMTI4cHg7XG5cbi8qIGZvbnQgc2l6ZXMgKi9cbiRmb250LXNpemUteHM6IDEycHg7XG4kZm9udC1zaXplLXM6IDE0cHg7XG4kZm9udC1zaXplLW06IDE2cHg7XG4kZm9udC1zaXplLWw6IDIwcHg7XG4kZm9udC1zaXplLXhsOiAyNHB4O1xuJGZvbnQtc2l6ZS14eGw6IDI4cHg7XG5cbi8qIGRldmljZSBzaXplcyAqL1xuJHNjcmVlbi14eHhzOiAzMjBweDtcbiRzY3JlZW4teHhzOiA0ODBweDtcbiRzY3JlZW4teHM6IDU3NnB4O1xuJHNjcmVlbi1zOiA3NjhweDtcbiRzY3JlZW4tbTogMTAyNHB4O1xuJHNjcmVlbi1sOiAxMzYwcHg7XG4kc2NyZWVuLXhsOiAxOTIwcHg7XG5cbi8qIG1hdGVyaWFsICovXG4kbWF0LXRvb2xiYXItaGVpZ2h0OiA2NHB4O1xuJG1hdC1zcGlubmVyLXNpemU6IDEyOHB4O1xuXG4vKiBtb2RhbHMgKi9cbiRtb2RhbC1oZWFkZXItaGVpZ2h0OiA3MHB4O1xuJG1vZGFsLWZvb3Rlci1oZWlnaHQ6IDg0cHg7XG5cbi8qIGdlbmVyaWMgKi9cbiRwYWdlLXBhZGRpbmc6ICRzcGFjaW5nLW07XG4kY2FyZC1wYWRkaW5nOiAkc3BhY2luZy1zO1xuJGV4cGFuc2lvbi1wYW5lbC1wYWRkaW5nOiAkc3BhY2luZy1zO1xuJG1heC1pbnB1dC1zaXplOiA2NDBweDtcbiRzZXBhcmF0b3ItdGhpY2tuZXNzOiAxcHg7XG5cbi8qIHNwZWNpZmljICovXG4kZm9vdGVyLWhlaWdodDogMTAzcHg7XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xuXG46aG9zdCB7XG4gID4gLmZvb3RlciB7XG4gICAgaGVpZ2h0OiAkbW9kYWwtZm9vdGVyLWhlaWdodDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbiJdfQ== */';

        /***/
      },

    /***/ './src/app/modules/shared/components/modal/mt-modal-footer/mt-modal-footer.component.ts':
      /*!**********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/modal/mt-modal-footer/mt-modal-footer.component.ts ***!
  \**********************************************************************************************/
      /*! exports provided: MtModalFooterComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MtModalFooterComponent',
          function() {
            return MtModalFooterComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };

        var MtModalFooterComponent = /** @class */ (function() {
          function MtModalFooterComponent() {}
          MtModalFooterComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-modal-footer',
                template: __webpack_require__(
                  /*! ./mt-modal-footer.component.html */ './src/app/modules/shared/components/modal/mt-modal-footer/mt-modal-footer.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./mt-modal-footer.component.scss */ './src/app/modules/shared/components/modal/mt-modal-footer/mt-modal-footer.component.scss'
                  )
                ]
              })
            ],
            MtModalFooterComponent
          );
          return MtModalFooterComponent;
        })();

        /***/
      },

    /***/ './src/app/modules/shared/components/modal/mt-modal-header/mt-modal-header.component.html':
      /*!************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/modal/mt-modal-header/mt-modal-header.component.html ***!
  \************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="header no-vertical-padding no-margin">\n  <div class="title">\n    <h3 class="no-margin">\n      <ng-content></ng-content>\n    </h3>\n  </div>\n\n  <fa-icon name="times" class="clickable" (click)="onClosePressed.emit()"></fa-icon>\n</div>\n\n<mat-divider></mat-divider>\n';

        /***/
      },

    /***/ './src/app/modules/shared/components/modal/mt-modal-header/mt-modal-header.component.scss':
      /*!************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/modal/mt-modal-header/mt-modal-header.component.scss ***!
  \************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\n:host > .header {\n  height: 70px;\n  display: flex;\n  align-items: center; }\n:host > .header > .title {\n    flex: 1;\n    padding-right: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9tdC1tb2RhbC1oZWFkZXIvWjpcXFR4dXNcXFByb2plY3RzXFx3ZWJcXHVub2ZmaWNpYWwtbmc1LWFuaWxpc3QtY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL210LW1vZGFsLWhlYWRlci9aOlxcVHh1c1xcUHJvamVjdHNcXHdlYlxcdW5vZmZpY2lhbC1uZzUtYW5pbGlzdC1jbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXHNoYXJlZFxcY29tcG9uZW50c1xcbW9kYWxcXG10LW1vZGFsLWhlYWRlclxcbXQtbW9kYWwtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQUE7QUFZQSxlQUFBO0FBUUEsaUJBQUE7QUFTQSxhQUFBO0FBSUEsV0FBQTtBQUlBLFlBQUE7QUFPQSxhQUFBO0FDMUNBO0VBRUksWUQ4QnNCO0VDN0J0QixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7QUFKdkI7SUFPTSxPQUFPO0lBQ1AsbUJETlcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbXQtbW9kYWwtaGVhZGVyL210LW1vZGFsLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHNwYWNpbmcgKi9cbiRzcGFjaW5nLXh4eHhzOiAycHg7XG4kc3BhY2luZy14eHhzOiA0cHg7XG4kc3BhY2luZy14eHM6IDhweDtcbiRzcGFjaW5nLXhzOiAxNnB4O1xuJHNwYWNpbmctczogMjRweDtcbiRzcGFjaW5nLW06IDMycHg7XG4kc3BhY2luZy1sOiA0OHB4O1xuJHNwYWNpbmcteGw6IDY0cHg7XG4kc3BhY2luZy14eGw6IDk2cHg7XG4kc3BhY2luZy14eHhsOiAxMjhweDtcblxuLyogZm9udCBzaXplcyAqL1xuJGZvbnQtc2l6ZS14czogMTJweDtcbiRmb250LXNpemUtczogMTRweDtcbiRmb250LXNpemUtbTogMTZweDtcbiRmb250LXNpemUtbDogMjBweDtcbiRmb250LXNpemUteGw6IDI0cHg7XG4kZm9udC1zaXplLXh4bDogMjhweDtcblxuLyogZGV2aWNlIHNpemVzICovXG4kc2NyZWVuLXh4eHM6IDMyMHB4O1xuJHNjcmVlbi14eHM6IDQ4MHB4O1xuJHNjcmVlbi14czogNTc2cHg7XG4kc2NyZWVuLXM6IDc2OHB4O1xuJHNjcmVlbi1tOiAxMDI0cHg7XG4kc2NyZWVuLWw6IDEzNjBweDtcbiRzY3JlZW4teGw6IDE5MjBweDtcblxuLyogbWF0ZXJpYWwgKi9cbiRtYXQtdG9vbGJhci1oZWlnaHQ6IDY0cHg7XG4kbWF0LXNwaW5uZXItc2l6ZTogMTI4cHg7XG5cbi8qIG1vZGFscyAqL1xuJG1vZGFsLWhlYWRlci1oZWlnaHQ6IDcwcHg7XG4kbW9kYWwtZm9vdGVyLWhlaWdodDogODRweDtcblxuLyogZ2VuZXJpYyAqL1xuJHBhZ2UtcGFkZGluZzogJHNwYWNpbmctbTtcbiRjYXJkLXBhZGRpbmc6ICRzcGFjaW5nLXM7XG4kZXhwYW5zaW9uLXBhbmVsLXBhZGRpbmc6ICRzcGFjaW5nLXM7XG4kbWF4LWlucHV0LXNpemU6IDY0MHB4O1xuJHNlcGFyYXRvci10aGlja25lc3M6IDFweDtcblxuLyogc3BlY2lmaWMgKi9cbiRmb290ZXItaGVpZ2h0OiAxMDNweDtcbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XG5cbjpob3N0IHtcbiAgPiAuaGVhZGVyIHtcbiAgICBoZWlnaHQ6ICRtb2RhbC1oZWFkZXItaGVpZ2h0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgID4gLnRpdGxlIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAkc3BhY2luZy14cztcbiAgICB9XG4gIH1cbn1cbiJdfQ== */';

        /***/
      },

    /***/ './src/app/modules/shared/components/modal/mt-modal-header/mt-modal-header.component.ts':
      /*!**********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/modal/mt-modal-header/mt-modal-header.component.ts ***!
  \**********************************************************************************************/
      /*! exports provided: MtModalHeaderComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MtModalHeaderComponent',
          function() {
            return MtModalHeaderComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var MtModalHeaderComponent = /** @class */ (function() {
          function MtModalHeaderComponent() {
            this.onClosePressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'EventEmitter'
            ]();
          }
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata(
                'design:type',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']
              )
            ],
            MtModalHeaderComponent.prototype,
            'onClosePressed',
            void 0
          );
          MtModalHeaderComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-modal-header',
                template: __webpack_require__(
                  /*! ./mt-modal-header.component.html */ './src/app/modules/shared/components/modal/mt-modal-header/mt-modal-header.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./mt-modal-header.component.scss */ './src/app/modules/shared/components/modal/mt-modal-header/mt-modal-header.component.scss'
                  )
                ]
              })
            ],
            MtModalHeaderComponent
          );
          return MtModalHeaderComponent;
        })();

        /***/
      },

    /***/ './src/app/modules/shared/components/modal/mt-modal/mt-modal.component.html':
      /*!**********************************************************************************!*\
  !*** ./src/app/modules/shared/components/modal/mt-modal/mt-modal.component.html ***!
  \**********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<mat-card class="composite">\n  <ng-content></ng-content>\n</mat-card>\n';

        /***/
      },

    /***/ './src/app/modules/shared/components/modal/mt-modal/mt-modal.component.scss':
      /*!**********************************************************************************!*\
  !*** ./src/app/modules/shared/components/modal/mt-modal/mt-modal.component.scss ***!
  \**********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbXQtbW9kYWwvbXQtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */';

        /***/
      },

    /***/ './src/app/modules/shared/components/modal/mt-modal/mt-modal.component.ts':
      /*!********************************************************************************!*\
  !*** ./src/app/modules/shared/components/modal/mt-modal/mt-modal.component.ts ***!
  \********************************************************************************/
      /*! exports provided: MtModalComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MtModalComponent',
          function() {
            return MtModalComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };

        var MtModalComponent = /** @class */ (function() {
          function MtModalComponent() {}
          MtModalComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-modal',
                template: __webpack_require__(
                  /*! ./mt-modal.component.html */ './src/app/modules/shared/components/modal/mt-modal/mt-modal.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./mt-modal.component.scss */ './src/app/modules/shared/components/modal/mt-modal/mt-modal.component.scss'
                  )
                ]
              })
            ],
            MtModalComponent
          );
          return MtModalComponent;
        })();

        /***/
      },

    /***/ './src/app/modules/shared/components/mt-footer/mt-footer.component.html':
      /*!******************************************************************************!*\
  !*** ./src/app/modules/shared/components/mt-footer/mt-footer.component.html ***!
  \******************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<mat-toolbar>\n  <div class="text-center">\n    <div>\n      {{ \'footer.about\' | translate }}\n    </div>\n\n    <div class="links-wrapper">\n      <a [href]="gitHubProjectUrl"><fa-icon type="fab" name="github"></fa-icon> {{ \'footer.github\' | translate }} </a>\n    </div>\n\n    <div class="about-anilist margin-top-xxs">\n      {{ \'footer.anilistPrefix\' | translate }} <mat-icon svgIcon="anilist"></mat-icon>\n      {{ \'footer.anilistSuffix\' | translate }}\n    </div>\n  </div>\n</mat-toolbar>\n';

        /***/
      },

    /***/ './src/app/modules/shared/components/mt-footer/mt-footer.component.scss':
      /*!******************************************************************************!*\
  !*** ./src/app/modules/shared/components/mt-footer/mt-footer.component.scss ***!
  \******************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          "/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\nmat-toolbar {\n  display: block;\n  height: auto;\n  padding: 16px;\n  font-size: 14px;\n  line-height: 21px; }\nmat-toolbar .about-anilist {\n    color: #444; }\nmat-toolbar .about-anilist .mat-icon[svgIcon='anilist'] {\n      height: 12px;\n      width: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9tdC1mb290ZXIvWjpcXFR4dXNcXFByb2plY3RzXFx3ZWJcXHVub2ZmaWNpYWwtbmc1LWFuaWxpc3QtY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL210LWZvb3Rlci9aOlxcVHh1c1xcUHJvamVjdHNcXHdlYlxcdW5vZmZpY2lhbC1uZzUtYW5pbGlzdC1jbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXHNoYXJlZFxcY29tcG9uZW50c1xcbXQtZm9vdGVyXFxtdC1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBQTtBQVlBLGVBQUE7QUFRQSxpQkFBQTtBQVNBLGFBQUE7QUFJQSxXQUFBO0FBSUEsWUFBQTtBQU9BLGFBQUE7QUMxQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGFERGU7RUNJZixlRE1nQjtFQ0xoQixpQkFBNkIsRUFBQTtBQVAvQjtJQVVJLFdBQVcsRUFBQTtBQVZmO01BYU0sWUFBWTtNQUNaLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvbXQtZm9vdGVyL210LWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHNwYWNpbmcgKi9cbiRzcGFjaW5nLXh4eHhzOiAycHg7XG4kc3BhY2luZy14eHhzOiA0cHg7XG4kc3BhY2luZy14eHM6IDhweDtcbiRzcGFjaW5nLXhzOiAxNnB4O1xuJHNwYWNpbmctczogMjRweDtcbiRzcGFjaW5nLW06IDMycHg7XG4kc3BhY2luZy1sOiA0OHB4O1xuJHNwYWNpbmcteGw6IDY0cHg7XG4kc3BhY2luZy14eGw6IDk2cHg7XG4kc3BhY2luZy14eHhsOiAxMjhweDtcblxuLyogZm9udCBzaXplcyAqL1xuJGZvbnQtc2l6ZS14czogMTJweDtcbiRmb250LXNpemUtczogMTRweDtcbiRmb250LXNpemUtbTogMTZweDtcbiRmb250LXNpemUtbDogMjBweDtcbiRmb250LXNpemUteGw6IDI0cHg7XG4kZm9udC1zaXplLXh4bDogMjhweDtcblxuLyogZGV2aWNlIHNpemVzICovXG4kc2NyZWVuLXh4eHM6IDMyMHB4O1xuJHNjcmVlbi14eHM6IDQ4MHB4O1xuJHNjcmVlbi14czogNTc2cHg7XG4kc2NyZWVuLXM6IDc2OHB4O1xuJHNjcmVlbi1tOiAxMDI0cHg7XG4kc2NyZWVuLWw6IDEzNjBweDtcbiRzY3JlZW4teGw6IDE5MjBweDtcblxuLyogbWF0ZXJpYWwgKi9cbiRtYXQtdG9vbGJhci1oZWlnaHQ6IDY0cHg7XG4kbWF0LXNwaW5uZXItc2l6ZTogMTI4cHg7XG5cbi8qIG1vZGFscyAqL1xuJG1vZGFsLWhlYWRlci1oZWlnaHQ6IDcwcHg7XG4kbW9kYWwtZm9vdGVyLWhlaWdodDogODRweDtcblxuLyogZ2VuZXJpYyAqL1xuJHBhZ2UtcGFkZGluZzogJHNwYWNpbmctbTtcbiRjYXJkLXBhZGRpbmc6ICRzcGFjaW5nLXM7XG4kZXhwYW5zaW9uLXBhbmVsLXBhZGRpbmc6ICRzcGFjaW5nLXM7XG4kbWF4LWlucHV0LXNpemU6IDY0MHB4O1xuJHNlcGFyYXRvci10aGlja25lc3M6IDFweDtcblxuLyogc3BlY2lmaWMgKi9cbiRmb290ZXItaGVpZ2h0OiAxMDNweDtcbiIsIkBpbXBvcnQgJ3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcyc7XG5cbm1hdC10b29sYmFyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogJHNwYWNpbmcteHM7XG5cbiAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zO1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGxpbmUtaGVpZ2h0OiAkZm9udC1zaXplICogMS41O1xuXG4gIC5hYm91dC1hbmlsaXN0IHtcbiAgICBjb2xvcjogIzQ0NDtcblxuICAgIC5tYXQtaWNvbltzdmdJY29uPSdhbmlsaXN0J10ge1xuICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgd2lkdGg6IDE2cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */";

        /***/
      },

    /***/ './src/app/modules/shared/components/mt-footer/mt-footer.component.ts':
      /*!****************************************************************************!*\
  !*** ./src/app/modules/shared/components/mt-footer/mt-footer.component.ts ***!
  \****************************************************************************/
      /*! exports provided: MtFooterComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MtFooterComponent',
          function() {
            return MtFooterComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material */ './node_modules/@angular/material/esm5/material.es5.js'
        );
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/platform-browser */ './node_modules/@angular/platform-browser/fesm5/platform-browser.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var MtFooterComponent = /** @class */ (function() {
          function MtFooterComponent(iconRegistry, sanitizer) {
            this.gitHubProjectUrl =
              'https://github.com/jesuscc1993/unofficial-ng5-anilist-client';
            iconRegistry.addSvgIcon(
              'anilist',
              sanitizer.bypassSecurityTrustResourceUrl(
                'assets/pictures/vectorial/icons/anilist.svg'
              )
            );
          }
          MtFooterComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-footer',
                template: __webpack_require__(
                  /*! ./mt-footer.component.html */ './src/app/modules/shared/components/mt-footer/mt-footer.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./mt-footer.component.scss */ './src/app/modules/shared/components/mt-footer/mt-footer.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__[
                  'MatIconRegistry'
                ],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__[
                  'DomSanitizer'
                ]
              ])
            ],
            MtFooterComponent
          );
          return MtFooterComponent;
        })();

        /***/
      },

    /***/ './src/app/modules/shared/components/mt-header/mt-header.component.html':
      /*!******************************************************************************!*\
  !*** ./src/app/modules/shared/components/mt-header/mt-header.component.html ***!
  \******************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<mat-toolbar>\n  <div>\n    <span class="hide-below-s" title="Unofficial Angular Material Anilist Client">\n      {{ \'app.title\' | translate }}\n    </span>\n  </div>\n\n  <div class="centered-content section-links" *ngIf="user">\n    <a [routerLink]="animeSearchUrl" [class.active]="onAnimeSearch">\n      <fa-icon name="search" class="section-icon"></fa-icon>\n      <span class="small">\n        {{ \'anime.search.title\' | translate }}\n      </span>\n    </a>\n    <a [routerLink]="dashboardUrl" [class.active]="onDashboard">\n      <fa-icon name="columns" class="section-icon"></fa-icon>\n      <span class="small">\n        {{ \'anime.dashboard.title\' | translate }}\n      </span>\n    </a>\n    <a [routerLink]="userListUrl" [class.active]="onUserList">\n      <fa-icon name="th-list" class="section-icon"></fa-icon>\n      <span class="small">\n        {{ \'anime.userList.title\' | translate }}\n      </span>\n    </a>\n  </div>\n\n  <!-- logged in -->\n  <div *ngIf="user" class="flex-box center">\n    <span class="padding-right-xs clickable hide-below-s" [matMenuTriggerFor]="userMenu">\n      {{ user.name }}\n    </span>\n    <img class="avatar clickable hide-below-s" [src]="user.avatar.large" [matMenuTriggerFor]="userMenu" />\n\n    <a class="clickable show-below-s" [matMenuTriggerFor]="userMenu">\n      <fa-icon name="bars"></fa-icon>\n    </a>\n\n    <mat-menu #userMenu="matMenu">\n      <mt-menu-action (onPress)="navigateToAnilistProfile()" icon="external-link-alt">\n        {{ \'user.viewProfile\' | translate }}\n      </mt-menu-action>\n\n      <mt-menu-action (onPress)="logOut()" icon="door-open">\n        {{ \'user.logOut\' | translate }}\n      </mt-menu-action>\n    </mat-menu>\n  </div>\n\n  <!-- not logged in -->\n  <div *ngIf="!user" class="flex-box center">\n    <a *ngIf="loginAvailable" [href]="apiLoginUrl">\n      <span class="hide-below-s">\n        {{ \'user.logIn\' | translate }}\n      </span>\n      <fa-icon name="sign-in-alt"></fa-icon>\n    </a>\n  </div>\n</mat-toolbar>\n';

        /***/
      },

    /***/ './src/app/modules/shared/components/mt-header/mt-header.component.scss':
      /*!******************************************************************************!*\
  !*** ./src/app/modules/shared/components/mt-header/mt-header.component.scss ***!
  \******************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\nmat-toolbar {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  height: 64px;\n  padding: 0 24px; }\nmat-toolbar > * {\n    display: flex;\n    align-items: center;\n    flex: 1;\n    height: 100%; }\nmat-toolbar > *:first-child {\n      justify-content: flex-start; }\nmat-toolbar > *:not(:first-child):not(:last-child) {\n      justify-content: center; }\nmat-toolbar > *:last-child {\n      justify-content: flex-end; }\nmat-toolbar .centered-content {\n    text-align: center; }\nmat-toolbar .section-links a {\n    width: 112px;\n    display: inline-flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    border-top-width: 4px;\n    border-top-style: solid;\n    border-bottom-width: 0;\n    height: 100%;\n    transition: 0.2s;\n    font-size: 0;\n    padding: 4px 0; }\nmat-toolbar .section-links a > * {\n      font-size: initial; }\nmat-toolbar .section-links a .section-icon {\n      font-size: 28px;\n      padding: 2px 0; }\nmat-toolbar .section-links a.active {\n      border-bottom-width: 4px;\n      border-bottom-style: solid;\n      pointer-events: none; }\nmat-toolbar .section-links a .small {\n      display: block;\n      font-size: 12px;\n      line-height: 12px; }\nmat-toolbar img.avatar {\n    max-width: 64px;\n    max-height: 100%;\n    width: auto;\n    height: auto; }\n.action-icon {\n  min-width: 24px;\n  display: inline-block;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9tdC1oZWFkZXIvWjpcXFR4dXNcXFByb2plY3RzXFx3ZWJcXHVub2ZmaWNpYWwtbmc1LWFuaWxpc3QtY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL210LWhlYWRlci9aOlxcVHh1c1xcUHJvamVjdHNcXHdlYlxcdW5vZmZpY2lhbC1uZzUtYW5pbGlzdC1jbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXHNoYXJlZFxcY29tcG9uZW50c1xcbXQtaGVhZGVyXFxtdC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBQTtBQVlBLGVBQUE7QUFRQSxpQkFBQTtBQVNBLGFBQUE7QUFJQSxXQUFBO0FBSUEsWUFBQTtBQU9BLGFBQUE7QUMxQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixZRHdCdUI7RUN2QnZCLGVERmMsRUFBQTtBQ0hoQjtJQVFJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFlBQVksRUFBQTtBQVhoQjtNQWNNLDJCQUEyQixFQUFBO0FBZGpDO01Ba0JNLHVCQUF1QixFQUFBO0FBbEI3QjtNQXNCTSx5QkFBeUIsRUFBQTtBQXRCL0I7SUEyQkksa0JBQWtCLEVBQUE7QUEzQnRCO0lBZ0NNLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjLEVBQUE7QUExQ3BCO01BNkNRLGtCQUFrQixFQUFBO0FBN0MxQjtNQWlEUSxlRGpDWTtNQ2tDWixjQUFjLEVBQUE7QUFsRHRCO01Bc0RRLHdCQUF3QjtNQUN4QiwwQkFBMEI7TUFDMUIsb0JBQW9CLEVBQUE7QUF4RDVCO01BNERRLGNBQWM7TUFDZCxlRGxEVztNQ21EWCxpQkRuRFcsRUFBQTtBQ1huQjtJQXFFSSxlRHpDcUI7SUMwQ3JCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWSxFQUFBO0FBSWhCO0VBQ0UsZUQxRWM7RUMyRWQscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9tdC1oZWFkZXIvbXQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3BhY2luZyAqL1xuJHNwYWNpbmcteHh4eHM6IDJweDtcbiRzcGFjaW5nLXh4eHM6IDRweDtcbiRzcGFjaW5nLXh4czogOHB4O1xuJHNwYWNpbmcteHM6IDE2cHg7XG4kc3BhY2luZy1zOiAyNHB4O1xuJHNwYWNpbmctbTogMzJweDtcbiRzcGFjaW5nLWw6IDQ4cHg7XG4kc3BhY2luZy14bDogNjRweDtcbiRzcGFjaW5nLXh4bDogOTZweDtcbiRzcGFjaW5nLXh4eGw6IDEyOHB4O1xuXG4vKiBmb250IHNpemVzICovXG4kZm9udC1zaXplLXhzOiAxMnB4O1xuJGZvbnQtc2l6ZS1zOiAxNHB4O1xuJGZvbnQtc2l6ZS1tOiAxNnB4O1xuJGZvbnQtc2l6ZS1sOiAyMHB4O1xuJGZvbnQtc2l6ZS14bDogMjRweDtcbiRmb250LXNpemUteHhsOiAyOHB4O1xuXG4vKiBkZXZpY2Ugc2l6ZXMgKi9cbiRzY3JlZW4teHh4czogMzIwcHg7XG4kc2NyZWVuLXh4czogNDgwcHg7XG4kc2NyZWVuLXhzOiA1NzZweDtcbiRzY3JlZW4tczogNzY4cHg7XG4kc2NyZWVuLW06IDEwMjRweDtcbiRzY3JlZW4tbDogMTM2MHB4O1xuJHNjcmVlbi14bDogMTkyMHB4O1xuXG4vKiBtYXRlcmlhbCAqL1xuJG1hdC10b29sYmFyLWhlaWdodDogNjRweDtcbiRtYXQtc3Bpbm5lci1zaXplOiAxMjhweDtcblxuLyogbW9kYWxzICovXG4kbW9kYWwtaGVhZGVyLWhlaWdodDogNzBweDtcbiRtb2RhbC1mb290ZXItaGVpZ2h0OiA4NHB4O1xuXG4vKiBnZW5lcmljICovXG4kcGFnZS1wYWRkaW5nOiAkc3BhY2luZy1tO1xuJGNhcmQtcGFkZGluZzogJHNwYWNpbmctcztcbiRleHBhbnNpb24tcGFuZWwtcGFkZGluZzogJHNwYWNpbmctcztcbiRtYXgtaW5wdXQtc2l6ZTogNjQwcHg7XG4kc2VwYXJhdG9yLXRoaWNrbmVzczogMXB4O1xuXG4vKiBzcGVjaWZpYyAqL1xuJGZvb3Rlci1oZWlnaHQ6IDEwM3B4O1xuIiwiQGltcG9ydCAnc3JjL2FwcC9zdHlsZXMvdmFyaWFibGVzJztcblxubWF0LXRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAkbWF0LXRvb2xiYXItaGVpZ2h0O1xuICBwYWRkaW5nOiAwICRzcGFjaW5nLXM7XG5cbiAgPiAqIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB9XG5cbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgfVxuICB9XG5cbiAgLmNlbnRlcmVkLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5zZWN0aW9uLWxpbmtzIHtcbiAgICBhIHtcbiAgICAgIHdpZHRoOiAxMTJweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBib3JkZXItdG9wLXdpZHRoOiA0cHg7XG4gICAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgZm9udC1zaXplOiAwO1xuICAgICAgcGFkZGluZzogNHB4IDA7XG5cbiAgICAgID4gKiB7XG4gICAgICAgIGZvbnQtc2l6ZTogaW5pdGlhbDtcbiAgICAgIH1cblxuICAgICAgLnNlY3Rpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eGw7XG4gICAgICAgIHBhZGRpbmc6IDJweCAwO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDRweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgfVxuXG4gICAgICAuc21hbGwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xuICAgICAgICBsaW5lLWhlaWdodDogJGZvbnQtc2l6ZS14cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbWcuYXZhdGFyIHtcbiAgICAkbWF4LXNpemU6ICRtYXQtdG9vbGJhci1oZWlnaHQ7XG4gICAgbWF4LXdpZHRoOiAkbWF4LXNpemU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cblxuLmFjdGlvbi1pY29uIHtcbiAgbWluLXdpZHRoOiAkc3BhY2luZy1zO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */';

        /***/
      },

    /***/ './src/app/modules/shared/components/mt-header/mt-header.component.ts':
      /*!****************************************************************************!*\
  !*** ./src/app/modules/shared/components/mt-header/mt-header.component.ts ***!
  \****************************************************************************/
      /*! exports provided: MtHeaderComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MtHeaderComponent',
          function() {
            return MtHeaderComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../environments/environment */ './src/environments/environment.ts'
        );
        /* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../app.constants */ './src/app/app.constants.ts'
        );
        /* harmony import */ var _modules_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../modules/shared/services/auth.service */ './src/app/modules/shared/services/auth.service.ts'
        );
        /* harmony import */ var _store_auth_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../store/auth.store */ './src/app/modules/shared/store/auth.store.ts'
        );
        /* harmony import */ var _with_observable_on_destroy_with_observable_on_destroy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../with-observable-on-destroy/with-observable-on-destroy.component */ './src/app/modules/shared/components/with-observable-on-destroy/with-observable-on-destroy.component.ts'
        );
        var __extends =
          (undefined && undefined.__extends) ||
          (function() {
            var extendStatics = function(d, b) {
              extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype =
                b === null
                  ? Object.create(b)
                  : ((__.prototype = b.prototype), new __());
            };
          })();
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var MtHeaderComponent = /** @class */ (function(_super) {
          __extends(MtHeaderComponent, _super);
          function MtHeaderComponent(router, authService, authStore) {
            var _this = _super.call(this) || this;
            _this.router = router;
            _this.authService = authService;
            _this.authStore = authStore;
            _this.apiLoginUrl =
              _app_constants__WEBPACK_IMPORTED_MODULE_4__['apiLoginUrl'];
            _this.dashboardUrl =
              _app_constants__WEBPACK_IMPORTED_MODULE_4__['dashboardUrl'];
            _this.animeSearchUrl =
              _app_constants__WEBPACK_IMPORTED_MODULE_4__['animeSearchUrl'];
            _this.userListUrl =
              _app_constants__WEBPACK_IMPORTED_MODULE_4__['userListUrl'];
            if (
              location.href.includes(
                _app_constants__WEBPACK_IMPORTED_MODULE_4__['apiTokenPrefix']
              )
            ) {
              var locationParts = location.href
                .split('&')[0]
                .split(
                  _app_constants__WEBPACK_IMPORTED_MODULE_4__['apiTokenPrefix']
                );
              history.replaceState({}, 'Login success', locationParts[0]);
              _this.authService.logIn(locationParts[1]);
              _this.navigateToHomePage(true);
            }
            _this.loginAvailable =
              _environments_environment__WEBPACK_IMPORTED_MODULE_3__[
                'environment'
              ].anilist_client_id >= 0;
            _this.user = _this.authStore.getUser();
            _this.router.events
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(
                  function() {
                    _this.onRoot = location.href.includes(
                      _app_constants__WEBPACK_IMPORTED_MODULE_4__['rootUrl']
                    );
                    _this.onDashboard = location.href.includes(
                      _app_constants__WEBPACK_IMPORTED_MODULE_4__[
                        'dashboardUrl'
                      ]
                    );
                    _this.onAnimeSearch = location.href.includes(
                      _app_constants__WEBPACK_IMPORTED_MODULE_4__[
                        'animeSearchUrl'
                      ]
                    );
                    _this.onUserList = location.href.includes(
                      _app_constants__WEBPACK_IMPORTED_MODULE_4__['userListUrl']
                    );
                  }
                )
              )
              .subscribe();
            _this.authService.userChange
              .pipe(
                Object(
                  rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['takeUntil']
                )(_this.destroyed$),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(
                  function(user) {
                    _this.user = user;
                  }
                )
              )
              .subscribe();
            return _this;
          }
          MtHeaderComponent.prototype.navigateToAnilistProfile = function() {
            window.open('https://anilist.co/user/' + this.user.name);
          };
          MtHeaderComponent.prototype.navigateToUserList = function(
            replaceUrl
          ) {
            this.router.navigate(
              [_app_constants__WEBPACK_IMPORTED_MODULE_4__['userListUrl']],
              {
                replaceUrl: replaceUrl
              }
            );
          };
          MtHeaderComponent.prototype.navigateToHomePage = function(
            replaceUrl
          ) {
            this.router.navigate(
              [_app_constants__WEBPACK_IMPORTED_MODULE_4__['rootUrl']],
              {
                replaceUrl: replaceUrl
              }
            );
          };
          MtHeaderComponent.prototype.logOut = function() {
            this.authService.logOut();
            this.user = undefined;
            this.loginAvailable =
              _environments_environment__WEBPACK_IMPORTED_MODULE_3__[
                'environment'
              ].anilist_client_id >= 0;
            this.navigateToHomePage();
          };
          MtHeaderComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-header',
                template: __webpack_require__(
                  /*! ./mt-header.component.html */ './src/app/modules/shared/components/mt-header/mt-header.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./mt-header.component.scss */ './src/app/modules/shared/components/mt-header/mt-header.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__['Router'],
                _modules_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__[
                  'AuthService'
                ],
                _store_auth_store__WEBPACK_IMPORTED_MODULE_6__['AuthStore']
              ])
            ],
            MtHeaderComponent
          );
          return MtHeaderComponent;
        })(
          _with_observable_on_destroy_with_observable_on_destroy_component__WEBPACK_IMPORTED_MODULE_7__[
            'WithObservableOnDestroy'
          ]
        );

        /***/
      },

    /***/ './src/app/modules/shared/components/mt-menu-action/mt-menu-action.component.html':
      /*!****************************************************************************************!*\
  !*** ./src/app/modules/shared/components/mt-menu-action/mt-menu-action.component.html ***!
  \****************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<button mat-menu-item (click)="onPress.emit()" [disabled]="disabled === true">\n  <fa-icon [name]="icon"></fa-icon>\n  <ng-content></ng-content>\n</button>\n';

        /***/
      },

    /***/ './src/app/modules/shared/components/mt-menu-action/mt-menu-action.component.scss':
      /*!****************************************************************************************!*\
  !*** ./src/app/modules/shared/components/mt-menu-action/mt-menu-action.component.scss ***!
  \****************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\nfa-icon {\n  min-width: 24px;\n  display: inline-block;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9tdC1tZW51LWFjdGlvbi9aOlxcVHh1c1xcUHJvamVjdHNcXHdlYlxcdW5vZmZpY2lhbC1uZzUtYW5pbGlzdC1jbGllbnQvc3JjXFxhcHBcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvbXQtbWVudS1hY3Rpb24vWjpcXFR4dXNcXFByb2plY3RzXFx3ZWJcXHVub2ZmaWNpYWwtbmc1LWFuaWxpc3QtY2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxzaGFyZWRcXGNvbXBvbmVudHNcXG10LW1lbnUtYWN0aW9uXFxtdC1tZW51LWFjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFBO0FBWUEsZUFBQTtBQVFBLGlCQUFBO0FBU0EsYUFBQTtBQUlBLFdBQUE7QUFJQSxZQUFBO0FBT0EsYUFBQTtBQzFDQTtFQUNFLGVERWM7RUNEZCxxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL210LW1lbnUtYWN0aW9uL210LW1lbnUtYWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3BhY2luZyAqL1xuJHNwYWNpbmcteHh4eHM6IDJweDtcbiRzcGFjaW5nLXh4eHM6IDRweDtcbiRzcGFjaW5nLXh4czogOHB4O1xuJHNwYWNpbmcteHM6IDE2cHg7XG4kc3BhY2luZy1zOiAyNHB4O1xuJHNwYWNpbmctbTogMzJweDtcbiRzcGFjaW5nLWw6IDQ4cHg7XG4kc3BhY2luZy14bDogNjRweDtcbiRzcGFjaW5nLXh4bDogOTZweDtcbiRzcGFjaW5nLXh4eGw6IDEyOHB4O1xuXG4vKiBmb250IHNpemVzICovXG4kZm9udC1zaXplLXhzOiAxMnB4O1xuJGZvbnQtc2l6ZS1zOiAxNHB4O1xuJGZvbnQtc2l6ZS1tOiAxNnB4O1xuJGZvbnQtc2l6ZS1sOiAyMHB4O1xuJGZvbnQtc2l6ZS14bDogMjRweDtcbiRmb250LXNpemUteHhsOiAyOHB4O1xuXG4vKiBkZXZpY2Ugc2l6ZXMgKi9cbiRzY3JlZW4teHh4czogMzIwcHg7XG4kc2NyZWVuLXh4czogNDgwcHg7XG4kc2NyZWVuLXhzOiA1NzZweDtcbiRzY3JlZW4tczogNzY4cHg7XG4kc2NyZWVuLW06IDEwMjRweDtcbiRzY3JlZW4tbDogMTM2MHB4O1xuJHNjcmVlbi14bDogMTkyMHB4O1xuXG4vKiBtYXRlcmlhbCAqL1xuJG1hdC10b29sYmFyLWhlaWdodDogNjRweDtcbiRtYXQtc3Bpbm5lci1zaXplOiAxMjhweDtcblxuLyogbW9kYWxzICovXG4kbW9kYWwtaGVhZGVyLWhlaWdodDogNzBweDtcbiRtb2RhbC1mb290ZXItaGVpZ2h0OiA4NHB4O1xuXG4vKiBnZW5lcmljICovXG4kcGFnZS1wYWRkaW5nOiAkc3BhY2luZy1tO1xuJGNhcmQtcGFkZGluZzogJHNwYWNpbmctcztcbiRleHBhbnNpb24tcGFuZWwtcGFkZGluZzogJHNwYWNpbmctcztcbiRtYXgtaW5wdXQtc2l6ZTogNjQwcHg7XG4kc2VwYXJhdG9yLXRoaWNrbmVzczogMXB4O1xuXG4vKiBzcGVjaWZpYyAqL1xuJGZvb3Rlci1oZWlnaHQ6IDEwM3B4O1xuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzJztcblxuZmEtaWNvbiB7XG4gIG1pbi13aWR0aDogJHNwYWNpbmctcztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */';

        /***/
      },

    /***/ './src/app/modules/shared/components/mt-menu-action/mt-menu-action.component.ts':
      /*!**************************************************************************************!*\
  !*** ./src/app/modules/shared/components/mt-menu-action/mt-menu-action.component.ts ***!
  \**************************************************************************************/
      /*! exports provided: MtMenuActionComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MtMenuActionComponent',
          function() {
            return MtMenuActionComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var MtMenuActionComponent = /** @class */ (function() {
          function MtMenuActionComponent() {
            this.onPress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'EventEmitter'
            ]();
          }
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Boolean)
            ],
            MtMenuActionComponent.prototype,
            'disabled',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', String)
            ],
            MtMenuActionComponent.prototype,
            'icon',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata(
                'design:type',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']
              )
            ],
            MtMenuActionComponent.prototype,
            'onPress',
            void 0
          );
          MtMenuActionComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-menu-action',
                template: __webpack_require__(
                  /*! ./mt-menu-action.component.html */ './src/app/modules/shared/components/mt-menu-action/mt-menu-action.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./mt-menu-action.component.scss */ './src/app/modules/shared/components/mt-menu-action/mt-menu-action.component.scss'
                  )
                ]
              })
            ],
            MtMenuActionComponent
          );
          return MtMenuActionComponent;
        })();

        /***/
      },

    /***/ './src/app/modules/shared/components/with-observable-on-destroy/with-observable-on-destroy.component.ts':
      /*!**************************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/with-observable-on-destroy/with-observable-on-destroy.component.ts ***!
  \**************************************************************************************************************/
      /*! exports provided: WithObservableOnDestroy */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'WithObservableOnDestroy',
          function() {
            return WithObservableOnDestroy;
          }
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );

        var WithObservableOnDestroy = /** @class */ (function() {
          function WithObservableOnDestroy() {
            this.destroyedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__[
              'Subject'
            ]();
            this.destroyed$ = this.destroyedSubject.asObservable();
          }
          WithObservableOnDestroy.prototype.ngOnDestroy = function() {
            this.destroyedSubject.next();
          };
          return WithObservableOnDestroy;
        })();

        /***/
      },

    /***/ './src/app/modules/shared/pipes/sort.ts':
      /*!**********************************************!*\
  !*** ./src/app/modules/shared/pipes/sort.ts ***!
  \**********************************************/
      /*! exports provided: SortPipe */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'SortPipe',
          function() {
            return SortPipe;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };

        var SortPipe = /** @class */ (function() {
          function SortPipe() {}
          SortPipe.prototype.transform = function(array, field, desc) {
            var direction = desc ? -1 : 1;
            if (array && array.length) {
              array.sort(function(a, b) {
                if (a[field] < b[field]) {
                  return -1 * direction;
                } else if (a[field] > b[field]) {
                  return 1 * direction;
                } else {
                  return 0;
                }
              });
            }
            return array;
          };
          SortPipe = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Pipe'])({
                name: 'sort'
              })
            ],
            SortPipe
          );
          return SortPipe;
        })();

        /***/
      },

    /***/ './src/app/modules/shared/services/auth.service.ts':
      /*!*********************************************************!*\
  !*** ./src/app/modules/shared/services/auth.service.ts ***!
  \*********************************************************/
      /*! exports provided: AuthService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AuthService',
          function() {
            return AuthService;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../app.constants */ './src/app/app.constants.ts'
        );
        /* harmony import */ var _utils_local_storage_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../utils/local-storage.util */ './src/app/utils/local-storage.util.ts'
        );
        /* harmony import */ var _api_auth_auth_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../api/auth/auth.api */ './src/app/modules/shared/api/auth/auth.api.ts'
        );
        /* harmony import */ var _store_auth_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../store/auth.store */ './src/app/modules/shared/store/auth.store.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var AuthService = /** @class */ (function() {
          function AuthService(authApi, authStore) {
            this.authApi = authApi;
            this.authStore = authStore;
            this.userChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__[
              'Subject'
            ]();
            this.getAccessToken();
            this.getUser();
          }
          AuthService.prototype.logIn = function(accessToken) {
            var _this = this;
            this.setAccessToken(accessToken);
            this.authApi
              .queryUser()
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(
                  function(user) {
                    _this.setUser(user);
                    _this.userChange.next(user);
                  }
                )
              )
              .subscribe();
          };
          AuthService.prototype.logOut = function() {
            this.removeAccessToken();
            this.removeUser();
            this.userChange.next();
          };
          AuthService.prototype.setAccessToken = function(accessToken) {
            this.authStore.setAccessToken(accessToken);
            _utils_local_storage_util__WEBPACK_IMPORTED_MODULE_4__[
              'LocalStorage'
            ].setString(
              _app_constants__WEBPACK_IMPORTED_MODULE_3__[
                'accessTokenCookieKey'
              ],
              accessToken
            );
          };
          AuthService.prototype.getAccessToken = function() {
            var accessToken = _utils_local_storage_util__WEBPACK_IMPORTED_MODULE_4__[
              'LocalStorage'
            ].getString(
              _app_constants__WEBPACK_IMPORTED_MODULE_3__[
                'accessTokenCookieKey'
              ]
            );
            this.authStore.setAccessToken(accessToken);
          };
          AuthService.prototype.removeAccessToken = function() {
            this.authStore.removeAccessToken();
            _utils_local_storage_util__WEBPACK_IMPORTED_MODULE_4__[
              'LocalStorage'
            ].remove(
              _app_constants__WEBPACK_IMPORTED_MODULE_3__[
                'accessTokenCookieKey'
              ]
            );
          };
          AuthService.prototype.setUser = function(user) {
            this.authStore.setUser(user);
            _utils_local_storage_util__WEBPACK_IMPORTED_MODULE_4__[
              'LocalStorage'
            ].setObject(
              _app_constants__WEBPACK_IMPORTED_MODULE_3__['userCookieKey'],
              user
            );
          };
          AuthService.prototype.getUser = function() {
            var user = _utils_local_storage_util__WEBPACK_IMPORTED_MODULE_4__[
              'LocalStorage'
            ].getObject(
              _app_constants__WEBPACK_IMPORTED_MODULE_3__['userCookieKey']
            );
            this.authStore.setUser(user);
          };
          AuthService.prototype.removeUser = function() {
            this.authStore.removeUser();
            _utils_local_storage_util__WEBPACK_IMPORTED_MODULE_4__[
              'LocalStorage'
            ].remove(
              _app_constants__WEBPACK_IMPORTED_MODULE_3__['userCookieKey']
            );
          };
          AuthService = __decorate(
            [
              Object(
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable']
              )(),
              __metadata('design:paramtypes', [
                _api_auth_auth_api__WEBPACK_IMPORTED_MODULE_5__['AuthApi'],
                _store_auth_store__WEBPACK_IMPORTED_MODULE_6__['AuthStore']
              ])
            ],
            AuthService
          );
          return AuthService;
        })();

        /***/
      },

    /***/ './src/app/modules/shared/services/title.service.ts':
      /*!**********************************************************!*\
  !*** ./src/app/modules/shared/services/title.service.ts ***!
  \**********************************************************/
      /*! exports provided: TitleService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'TitleService',
          function() {
            return TitleService;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/platform-browser */ './node_modules/@angular/platform-browser/fesm5/platform-browser.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var TitleService = /** @class */ (function() {
          function TitleService(title, translateService) {
            this.title = title;
            this.translateService = translateService;
          }
          TitleService.prototype.setTitle = function(title) {
            this.title.setTitle(
              title
                ? this.translateService.instant('app.titleShort') +
                    ' - ' +
                    title
                : this.translateService.instant('app.title')
            );
          };
          TitleService = __decorate(
            [
              Object(
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable']
              )(),
              __metadata('design:paramtypes', [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__['Title'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__[
                  'TranslateService'
                ]
              ])
            ],
            TitleService
          );
          return TitleService;
        })();

        /***/
      },

    /***/ './src/app/modules/shared/services/toast.service.ts':
      /*!**********************************************************!*\
  !*** ./src/app/modules/shared/services/toast.service.ts ***!
  \**********************************************************/
      /*! exports provided: defaultToastOptions, ToastService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'defaultToastOptions',
          function() {
            return defaultToastOptions;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ToastService',
          function() {
            return ToastService;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material */ './node_modules/@angular/material/esm5/material.es5.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var defaultToastOptions = {
          duration: 3000,
          panelClass: 'success'
        };
        var ToastService = /** @class */ (function() {
          function ToastService(matSnackBar) {
            this.matSnackBar = matSnackBar;
          }
          ToastService.prototype.showToast = function(message, action, config) {
            if (config === void 0) {
              config = defaultToastOptions;
            }
            this.matSnackBar.open(message, action, config);
          };
          ToastService = __decorate(
            [
              Object(
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable']
              )(),
              __metadata('design:paramtypes', [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatSnackBar']
              ])
            ],
            ToastService
          );
          return ToastService;
        })();

        /***/
      },

    /***/ './src/app/modules/shared/shared.module.ts':
      /*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
      /*! exports provided: SharedModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'SharedModule',
          function() {
            return SharedModule;
          }
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/fesm5/common.js'
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js'
        );
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/platform-browser */ './node_modules/@angular/platform-browser/fesm5/platform-browser.js'
        );
        /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/platform-browser/animations */ './node_modules/@angular/platform-browser/fesm5/animations.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../material/material.module */ './src/app/modules/material/material.module.ts'
        );
        /* harmony import */ var _api_auth_auth_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./api/auth/auth.api */ './src/app/modules/shared/api/auth/auth.api.ts'
        );
        /* harmony import */ var _components_fa_icon_fa_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./components/fa-icon/fa-icon.component */ './src/app/modules/shared/components/fa-icon/fa-icon.component.ts'
        );
        /* harmony import */ var _components_modal_mt_modal_content_mt_modal_content_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./components/modal/mt-modal-content/mt-modal-content.component */ './src/app/modules/shared/components/modal/mt-modal-content/mt-modal-content.component.ts'
        );
        /* harmony import */ var _components_modal_mt_modal_footer_mt_modal_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./components/modal/mt-modal-footer/mt-modal-footer.component */ './src/app/modules/shared/components/modal/mt-modal-footer/mt-modal-footer.component.ts'
        );
        /* harmony import */ var _components_modal_mt_modal_header_mt_modal_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./components/modal/mt-modal-header/mt-modal-header.component */ './src/app/modules/shared/components/modal/mt-modal-header/mt-modal-header.component.ts'
        );
        /* harmony import */ var _components_modal_mt_modal_mt_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./components/modal/mt-modal/mt-modal.component */ './src/app/modules/shared/components/modal/mt-modal/mt-modal.component.ts'
        );
        /* harmony import */ var _components_mt_footer_mt_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./components/mt-footer/mt-footer.component */ './src/app/modules/shared/components/mt-footer/mt-footer.component.ts'
        );
        /* harmony import */ var _components_mt_header_mt_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./components/mt-header/mt-header.component */ './src/app/modules/shared/components/mt-header/mt-header.component.ts'
        );
        /* harmony import */ var _components_mt_menu_action_mt_menu_action_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./components/mt-menu-action/mt-menu-action.component */ './src/app/modules/shared/components/mt-menu-action/mt-menu-action.component.ts'
        );
        /* harmony import */ var _pipes_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./pipes/sort */ './src/app/modules/shared/pipes/sort.ts'
        );
        /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./services/auth.service */ './src/app/modules/shared/services/auth.service.ts'
        );
        /* harmony import */ var _services_title_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./services/title.service */ './src/app/modules/shared/services/title.service.ts'
        );
        /* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./services/toast.service */ './src/app/modules/shared/services/toast.service.ts'
        );
        /* harmony import */ var _store_auth_store__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./store/auth.store */ './src/app/modules/shared/store/auth.store.ts'
        );
        /* harmony import */ var _store_media_store__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./store/media.store */ './src/app/modules/shared/store/media.store.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };

        var declarations = [
          _components_fa_icon_fa_icon_component__WEBPACK_IMPORTED_MODULE_10__[
            'FaIconComponent'
          ],
          _components_mt_footer_mt_footer_component__WEBPACK_IMPORTED_MODULE_15__[
            'MtFooterComponent'
          ],
          _components_mt_header_mt_header_component__WEBPACK_IMPORTED_MODULE_16__[
            'MtHeaderComponent'
          ],
          _components_mt_menu_action_mt_menu_action_component__WEBPACK_IMPORTED_MODULE_17__[
            'MtMenuActionComponent'
          ],
          _components_modal_mt_modal_mt_modal_component__WEBPACK_IMPORTED_MODULE_14__[
            'MtModalComponent'
          ],
          _components_modal_mt_modal_content_mt_modal_content_component__WEBPACK_IMPORTED_MODULE_11__[
            'MtModalContentComponent'
          ],
          _components_modal_mt_modal_footer_mt_modal_footer_component__WEBPACK_IMPORTED_MODULE_12__[
            'MtModalFooterComponent'
          ],
          _components_modal_mt_modal_header_mt_modal_header_component__WEBPACK_IMPORTED_MODULE_13__[
            'MtModalHeaderComponent'
          ],
          _pipes_sort__WEBPACK_IMPORTED_MODULE_18__['SortPipe']
        ];
        var imports = [
          _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__[
            'BrowserAnimationsModule'
          ],
          _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__[
            'BrowserModule'
          ],
          _angular_common__WEBPACK_IMPORTED_MODULE_0__['CommonModule'],
          _angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormsModule'],
          _angular_common_http__WEBPACK_IMPORTED_MODULE_1__['HttpClientModule'],
          _material_material_module__WEBPACK_IMPORTED_MODULE_8__[
            'MaterialModule'
          ],
          _angular_forms__WEBPACK_IMPORTED_MODULE_3__['ReactiveFormsModule'],
          _angular_router__WEBPACK_IMPORTED_MODULE_6__['RouterModule'],
          _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__['TranslateModule']
        ];
        var SharedModule = /** @class */ (function() {
          function SharedModule() {}
          SharedModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__['NgModule'])({
                declarations: declarations,
                imports: imports,
                exports: declarations.concat(imports),
                providers: [
                  _api_auth_auth_api__WEBPACK_IMPORTED_MODULE_9__['AuthApi'],
                  _services_auth_service__WEBPACK_IMPORTED_MODULE_19__[
                    'AuthService'
                  ],
                  _store_auth_store__WEBPACK_IMPORTED_MODULE_22__['AuthStore'],
                  _store_media_store__WEBPACK_IMPORTED_MODULE_23__[
                    'MediaStore'
                  ],
                  _services_title_service__WEBPACK_IMPORTED_MODULE_20__[
                    'TitleService'
                  ],
                  _services_toast_service__WEBPACK_IMPORTED_MODULE_21__[
                    'ToastService'
                  ]
                ]
              })
            ],
            SharedModule
          );
          return SharedModule;
        })();

        /***/
      },

    /***/ './src/app/modules/shared/store/auth.store.ts':
      /*!****************************************************!*\
  !*** ./src/app/modules/shared/store/auth.store.ts ***!
  \****************************************************/
      /*! exports provided: AuthStore */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AuthStore',
          function() {
            return AuthStore;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        var __assign =
          (undefined && undefined.__assign) ||
          function() {
            __assign =
              Object.assign ||
              function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                  s = arguments[i];
                  for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
              };
            return __assign.apply(this, arguments);
          };
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };

        var AuthStore = /** @class */ (function() {
          function AuthStore() {
            this.state = {};
          }
          AuthStore.prototype.setAccessToken = function(accessToken) {
            this.state = __assign({}, this.state, { accessToken: accessToken });
          };
          AuthStore.prototype.getAccessToken = function() {
            return this.state.accessToken;
          };
          AuthStore.prototype.removeAccessToken = function() {
            this.state = __assign({}, this.state, { accessToken: undefined });
          };
          AuthStore.prototype.setUser = function(user) {
            this.state = __assign({}, this.state, { user: user });
          };
          AuthStore.prototype.getUser = function() {
            return this.state.user;
          };
          AuthStore.prototype.removeUser = function() {
            this.state = __assign({}, this.state, { user: undefined });
          };
          AuthStore = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])()
            ],
            AuthStore
          );
          return AuthStore;
        })();

        /***/
      },

    /***/ './src/app/modules/shared/store/media.store.ts':
      /*!*****************************************************!*\
  !*** ./src/app/modules/shared/store/media.store.ts ***!
  \*****************************************************/
      /*! exports provided: MediaStore */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MediaStore',
          function() {
            return MediaStore;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        var __assign =
          (undefined && undefined.__assign) ||
          function() {
            __assign =
              Object.assign ||
              function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                  s = arguments[i];
                  for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
              };
            return __assign.apply(this, arguments);
          };
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };

        var MediaStore = /** @class */ (function() {
          function MediaStore() {
            this.state = { animeDictionary: {} };
          }
          MediaStore.prototype.getAnimeDictionary = function() {
            return this.state.animeDictionary;
          };
          MediaStore.prototype.storeAnime = function(animeList) {
            this.state = __assign({}, this.state, {
              animeDictionary: __assign(
                {},
                animeList.reduce(function(animeDictionary, anime) {
                  var _a;
                  return __assign(
                    {},
                    animeDictionary,
                    ((_a = {}), (_a[anime.id] = anime), _a)
                  );
                }, this.state.animeDictionary)
              )
            });
          };
          MediaStore = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])()
            ],
            MediaStore
          );
          return MediaStore;
        })();

        /***/
      },

    /***/ './src/app/modules/shared/types/anilist/media.types.ts':
      /*!*************************************************************!*\
  !*** ./src/app/modules/shared/types/anilist/media.types.ts ***!
  \*************************************************************/
      /*! exports provided: mediaFormats, mediaStatuses, MediaData, Anime */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'mediaFormats',
          function() {
            return mediaFormats;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'mediaStatuses',
          function() {
            return mediaStatuses;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MediaData',
          function() {
            return MediaData;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Anime',
          function() {
            return Anime;
          }
        );
        var __extends =
          (undefined && undefined.__extends) ||
          (function() {
            var extendStatics = function(d, b) {
              extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype =
                b === null
                  ? Object.create(b)
                  : ((__.prototype = b.prototype), new __());
            };
          })();
        var mediaFormats = [
          'MOVIE',
          'MUSIC',
          'ONA',
          'OVA',
          'SPECIAL',
          'TV_SHORT',
          'TV'
        ];
        var mediaStatuses = [
          'FINISHED',
          'RELEASING',
          'NOT_YET_RELEASED',
          'CANCELLED'
        ];
        var MediaData = /** @class */ (function() {
          function MediaData() {}
          return MediaData;
        })();

        var Anime = /** @class */ (function(_super) {
          __extends(Anime, _super);
          function Anime() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          return Anime;
        })(MediaData);

        /***/
      },

    /***/ './src/app/pages/anime-detail/anime-detail.component.html':
      /*!****************************************************************!*\
  !*** ./src/app/pages/anime-detail/anime-detail.component.html ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="narrow-page">\n  <mat-progress-bar *ngIf="searching" mode="indeterminate"></mat-progress-bar>\n\n  <mat-card class="composite">\n    <div *ngIf="anime">\n      <div class="header">\n        <h3 class="no-margin">\n          {{ anime.title.romaji }}\n        </h3>\n      </div>\n\n      <mat-divider></mat-divider>\n\n      <div class="content">\n        <mt-anime-info *ngIf="anime" [anime]="anime" [showAsColumns]="true"> </mt-anime-info>\n      </div>\n    </div>\n  </mat-card>\n</div>\n';

        /***/
      },

    /***/ './src/app/pages/anime-detail/anime-detail.component.scss':
      /*!****************************************************************!*\
  !*** ./src/app/pages/anime-detail/anime-detail.component.scss ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuaW1lLWRldGFpbC9hbmltZS1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */';

        /***/
      },

    /***/ './src/app/pages/anime-detail/anime-detail.component.ts':
      /*!**************************************************************!*\
  !*** ./src/app/pages/anime-detail/anime-detail.component.ts ***!
  \**************************************************************/
      /*! exports provided: AnimeDetailPageComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AnimeDetailPageComponent',
          function() {
            return AnimeDetailPageComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _modules_anime_services_anime_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../modules/anime/services/anime.service */ './src/app/modules/anime/services/anime.service.ts'
        );
        /* harmony import */ var _modules_shared_services_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../modules/shared/services/title.service */ './src/app/modules/shared/services/title.service.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var AnimeDetailPageComponent = /** @class */ (function() {
          function AnimeDetailPageComponent(
            titleService,
            activatedRoute,
            animeService
          ) {
            this.titleService = titleService;
            this.activatedRoute = activatedRoute;
            this.animeService = animeService;
            this.titleService.setTitle();
            var animeId = this.activatedRoute.snapshot.params.id;
            if (animeId && animeId > 0) {
              this.getEntry(animeId);
            }
          }
          AnimeDetailPageComponent.prototype.getEntry = function(animeId) {
            var _this = this;
            this.searching = true;
            this.errorGotten = false;
            this.animeService
              .searchAnime({ id: animeId })
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(
                  function(response) {
                    _this.anime =
                      response.media.length > 0 && response.media[0];
                    _this.titleService.setTitle(_this.anime.title.romaji);
                    _this.searching = false;
                  },
                  function() {
                    _this.errorGotten = true;
                    _this.searching = false;
                  }
                )
              )
              .subscribe();
          };
          AnimeDetailPageComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-anime-detail',
                template: __webpack_require__(
                  /*! ./anime-detail.component.html */ './src/app/pages/anime-detail/anime-detail.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./anime-detail.component.scss */ './src/app/pages/anime-detail/anime-detail.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _modules_shared_services_title_service__WEBPACK_IMPORTED_MODULE_4__[
                  'TitleService'
                ],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__['ActivatedRoute'],
                _modules_anime_services_anime_service__WEBPACK_IMPORTED_MODULE_3__[
                  'AnimeService'
                ]
              ])
            ],
            AnimeDetailPageComponent
          );
          return AnimeDetailPageComponent;
        })();

        /***/
      },

    /***/ './src/app/pages/anime-search/anime-search.component.html':
      /*!****************************************************************!*\
  !*** ./src/app/pages/anime-search/anime-search.component.html ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="narrow-page">\n  <mat-card *ngIf="!user" class="warning margin-bottom-xs">\n    <h4>\n      <fa-icon name="exclamation-circle" class="margin-right-xxs"></fa-icon>\n      {{ \'user.notLoggedIn\' | translate }} {{ \'anime.search.limittedFeatures\' | translate }}\n    </h4>\n  </mat-card>\n\n  <form [formGroup]="searchForm" (ngSubmit)="search()">\n    <mat-card class="text-center">\n      <h1>\n        <label for="searchInput">\n          {{ \'anime.search.title\' | translate }}\n        </label>\n      </h1>\n\n      <div class="form-group">\n        <mat-form-field class="medium display-block margin-auto">\n          <input\n            id="searchInput"\n            matInput\n            placeholder="{{ \'anime.search.filters.byTitle\' | translate }}"\n            formControlName="search"\n          />\n        </mat-form-field>\n      </div>\n\n      <!--<mat-form-field id="yearInput">-->\n      <!--<input matInput [matDatepicker]="startDatePicker" placeholder="Year" disabled>-->\n      <!--<mat-datepicker-toggle matSuffix [for]="startDatePicker"></mat-datepicker-toggle>-->\n      <!--<mat-datepicker #startDatePicker disabled="false" startView="year"></mat-datepicker>-->\n      <!--</mat-form-field>-->\n\n      <mat-expansion-panel class="mat-elevation-z padding-bottom-s search-filters">\n        <mat-expansion-panel-header>\n          {{ \'anime.search.filters.advanced\' | translate }}\n        </mat-expansion-panel-header>\n\n        <mat-divider></mat-divider>\n\n        <div class="vertical-padding-xs">\n          <!-- air date -->\n          <div class="form-group two-rows">\n            <mat-form-field>\n              <input\n                matInput\n                type="number"\n                placeholder="{{ \'media.year\' | translate }} {{ \'anime.search.filters.after\' | translate }}..."\n                formControlName="startDateGreaterThan"\n                [min]="minYear"\n                [max]="maxYear"\n              />\n            </mat-form-field>\n\n            <mat-form-field>\n              <input\n                matInput\n                type="number"\n                placeholder="{{ \'media.year\' | translate }} {{ \'anime.search.filters.before\' | translate }}..."\n                formControlName="startDateSmallerThan"\n                [min]="minYear"\n                [max]="maxYear"\n              />\n            </mat-form-field>\n          </div>\n\n          <!-- score -->\n          <div class="form-group two-rows">\n            <mat-form-field>\n              <input\n                matInput\n                type="number"\n                placeholder="{{ \'media.score\' | translate }} {{ \'anime.search.filters.above\' | translate }}..."\n                formControlName="averageScoreGreaterThan"\n                min="0"\n                max="10"\n                step=".1"\n              />\n            </mat-form-field>\n\n            <mat-form-field>\n              <input\n                matInput\n                type="number"\n                placeholder="{{ \'media.score\' | translate }} {{ \'anime.search.filters.below\' | translate }}..."\n                formControlName="averageScoreSmallerThan"\n                min="0"\n                max="10"\n                step=".1"\n              />\n            </mat-form-field>\n          </div>\n\n          <!-- genre -->\n          <div class="form-group two-rows">\n            <mat-form-field>\n              <mat-select\n                placeholder="{{ \'media.genre\' | translate }} {{ \'anime.search.filters.includedIn\' | translate }}..."\n                formControlName="genreIn"\n                multiple\n              >\n                <mat-option *ngFor="let genre of mediaGenres" [value]="genre">\n                  {{ genre }}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <mat-form-field>\n              <mat-select\n                placeholder="{{ \'media.genre\' | translate }} {{ \'anime.search.filters.notIncludedIn\' | translate }}..."\n                formControlName="genreNotIn"\n                multiple\n              >\n                <mat-option *ngFor="let genre of mediaGenres" [value]="genre">\n                  {{ genre }}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n\n          <!-- format -->\n          <div class="form-group two-rows">\n            <mat-form-field>\n              <mat-select\n                placeholder="{{ \'media.format\' | translate }} {{ \'anime.search.filters.includedIn\' | translate }}..."\n                #formatInput\n                formControlName="formatIn"\n                multiple\n              >\n                <mat-option *ngFor="let mediaFormat of mediaFormats" [value]="mediaFormat">\n                  {{ \'media.formatValues.\' + mediaFormat | translate }}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <mat-form-field>\n              <mat-select\n                placeholder="{{ \'media.format\' | translate }} {{ \'anime.search.filters.notIncludedIn\' | translate }}..."\n                #formatInput\n                formControlName="formatNotIn"\n                multiple\n              >\n                <mat-option *ngFor="let mediaFormat of mediaFormats" [value]="mediaFormat">\n                  {{ \'media.formatValues.\' + mediaFormat | translate }}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n\n          <!-- status -->\n          <div class="form-group two-rows">\n            <mat-form-field>\n              <mat-select\n                placeholder="{{ \'media.status\' | translate }} {{ \'anime.search.filters.includedIn\' | translate }}..."\n                #formatInput\n                formControlName="statusIn"\n                multiple\n              >\n                <mat-option *ngFor="let mediaStatus of mediaStatuses" [value]="mediaStatus">\n                  {{ \'media.statusValues.\' + mediaStatus | translate }}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <mat-form-field>\n              <mat-select\n                placeholder="{{ \'media.status\' | translate }} {{ \'anime.search.filters.notIncludedIn\' | translate }}..."\n                #formatInput\n                formControlName="statusNotIn"\n                multiple\n              >\n                <mat-option *ngFor="let mediaStatus of mediaStatuses" [value]="mediaStatus">\n                  {{ \'media.statusValues.\' + mediaStatus | translate }}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n\n          <!-- on list -->\n          <div class="form-group">\n            <mat-form-field>\n              <mat-select placeholder="{{ \'anime.search.filters.onList\' | translate }}..." formControlName="onList">\n                <mat-option *ngFor="let option of onListOptions" [value]="option">\n                  {{ \'anime.search.filters.onListValues.\' + option | translate }}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n\n        <div class="text-center padding-bottom-xs">\n          <button mat-raised-button type="button" (click)="clearFilters($event)">\n            {{ \'anime.search.filters.clear\' | translate }}\n          </button>\n        </div>\n\n        <mat-divider></mat-divider>\n      </mat-expansion-panel>\n\n      <div class="text-center">\n        <button mat-raised-button color="accent" [disabled]="!searchForm.valid">\n          <fa-icon name="search baseline" class="margin-right-xxxs"></fa-icon>\n          {{ \'anime.search.submit\' | translate }}\n        </button>\n      </div>\n    </mat-card>\n\n    <mat-progress-bar *ngIf="searching" mode="indeterminate"></mat-progress-bar>\n    <div *ngIf="!searching" class="progress-placeholder"></div>\n\n    <mat-card *ngIf="error" class="error">\n      <h4>\n        <fa-icon name="exclamation-circle" class="margin-right-xxs"></fa-icon>\n        {{ error }}\n      </h4>\n    </mat-card>\n\n    <mat-card *ngIf="noResults" class="info">\n      <h4>\n        <fa-icon name="info-circle" class="margin-right-xxs"></fa-icon>\n        No results found\n      </h4>\n    </mat-card>\n\n    <mat-card *ngIf="animeList && animeList.length > 0" class="no-padding">\n      <mt-search-results-table [tableData]="animeList" (onSortChange)="sortBy($event)"> </mt-search-results-table>\n\n      <mat-paginator\n        [showFirstLastButtons]="true"\n        [length]="pagination.total"\n        [pageSize]="pagination.perPage"\n        [pageIndex]="pagination.pageIndex"\n        [pageSizeOptions]="[5, 10, 25, 50]"\n        (page)="changePage($event)"\n      >\n      </mat-paginator>\n    </mat-card>\n  </form>\n</div>\n';

        /***/
      },

    /***/ './src/app/pages/anime-search/anime-search.component.scss':
      /*!****************************************************************!*\
  !*** ./src/app/pages/anime-search/anime-search.component.scss ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\nmat-form-field {\n  width: 100%; }\n#searchInput {\n  font-size: 16px;\n  line-height: 24px; }\n.form-group {\n  max-width: 640px;\n  margin: auto; }\n@media (min-width: 481px) {\n    .form-group.two-rows > * {\n      max-width: calc(50% - 16px); }\n      .form-group.two-rows > *:first-child {\n        float: left; }\n      .form-group.two-rows > *:last-child {\n        float: right; } }\n.progress-placeholder {\n  height: 5px; }\nmat-card:not(:first-of-type) {\n  margin-top: 24px; }\nmat-expansion-panel-header {\n  padding: 0 8px; }\n@media (max-width: 480px) {\n  button {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYW5pbWUtc2VhcmNoL1o6XFxUeHVzXFxQcm9qZWN0c1xcd2ViXFx1bm9mZmljaWFsLW5nNS1hbmlsaXN0LWNsaWVudC9zcmNcXGFwcFxcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvYW5pbWUtc2VhcmNoL1o6XFxUeHVzXFxQcm9qZWN0c1xcd2ViXFx1bm9mZmljaWFsLW5nNS1hbmlsaXN0LWNsaWVudC9zcmNcXGFwcFxccGFnZXNcXGFuaW1lLXNlYXJjaFxcYW5pbWUtc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQUE7QUFZQSxlQUFBO0FBUUEsaUJBQUE7QUFTQSxhQUFBO0FBSUEsV0FBQTtBQUlBLFlBQUE7QUFPQSxhQUFBO0FDMUNBO0VBQ0UsV0FBVyxFQUFBO0FBR2I7RUFFRSxlRE9nQjtFQ05oQixpQkFBNkIsRUFBQTtBQUcvQjtFQUNFLGdCRDRCb0I7RUMzQnBCLFlBQVksRUFBQTtBQUlSO0lBTk47TUFPUSwyQkFBcUMsRUFBQTtNQVA3QztRQVVVLFdBQVcsRUFBQTtNQVZyQjtRQWFVLFlBQVksRUFBQSxFQUNiO0FBTVQ7RUFDRSxXQUFXLEVBQUE7QUFHYjtFQUVJLGdCRGpDWSxFQUFBO0FDcUNoQjtFQUNFLGNEeENlLEVBQUE7QUMyQ2pCO0VBQ0U7SUFDRSxXQUFXLEVBQUEsRUFDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuaW1lLXNlYXJjaC9hbmltZS1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzcGFjaW5nICovXG4kc3BhY2luZy14eHh4czogMnB4O1xuJHNwYWNpbmcteHh4czogNHB4O1xuJHNwYWNpbmcteHhzOiA4cHg7XG4kc3BhY2luZy14czogMTZweDtcbiRzcGFjaW5nLXM6IDI0cHg7XG4kc3BhY2luZy1tOiAzMnB4O1xuJHNwYWNpbmctbDogNDhweDtcbiRzcGFjaW5nLXhsOiA2NHB4O1xuJHNwYWNpbmcteHhsOiA5NnB4O1xuJHNwYWNpbmcteHh4bDogMTI4cHg7XG5cbi8qIGZvbnQgc2l6ZXMgKi9cbiRmb250LXNpemUteHM6IDEycHg7XG4kZm9udC1zaXplLXM6IDE0cHg7XG4kZm9udC1zaXplLW06IDE2cHg7XG4kZm9udC1zaXplLWw6IDIwcHg7XG4kZm9udC1zaXplLXhsOiAyNHB4O1xuJGZvbnQtc2l6ZS14eGw6IDI4cHg7XG5cbi8qIGRldmljZSBzaXplcyAqL1xuJHNjcmVlbi14eHhzOiAzMjBweDtcbiRzY3JlZW4teHhzOiA0ODBweDtcbiRzY3JlZW4teHM6IDU3NnB4O1xuJHNjcmVlbi1zOiA3NjhweDtcbiRzY3JlZW4tbTogMTAyNHB4O1xuJHNjcmVlbi1sOiAxMzYwcHg7XG4kc2NyZWVuLXhsOiAxOTIwcHg7XG5cbi8qIG1hdGVyaWFsICovXG4kbWF0LXRvb2xiYXItaGVpZ2h0OiA2NHB4O1xuJG1hdC1zcGlubmVyLXNpemU6IDEyOHB4O1xuXG4vKiBtb2RhbHMgKi9cbiRtb2RhbC1oZWFkZXItaGVpZ2h0OiA3MHB4O1xuJG1vZGFsLWZvb3Rlci1oZWlnaHQ6IDg0cHg7XG5cbi8qIGdlbmVyaWMgKi9cbiRwYWdlLXBhZGRpbmc6ICRzcGFjaW5nLW07XG4kY2FyZC1wYWRkaW5nOiAkc3BhY2luZy1zO1xuJGV4cGFuc2lvbi1wYW5lbC1wYWRkaW5nOiAkc3BhY2luZy1zO1xuJG1heC1pbnB1dC1zaXplOiA2NDBweDtcbiRzZXBhcmF0b3ItdGhpY2tuZXNzOiAxcHg7XG5cbi8qIHNwZWNpZmljICovXG4kZm9vdGVyLWhlaWdodDogMTAzcHg7XG4iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jc2VhcmNoSW5wdXQge1xuICAkZm9udC1zaXplOiAkZm9udC1zaXplLW07XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgbGluZS1oZWlnaHQ6ICRmb250LXNpemUgKiAxLjU7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWF4LXdpZHRoOiAkbWF4LWlucHV0LXNpemU7XG4gIG1hcmdpbjogYXV0bztcblxuICAmLnR3by1yb3dzIHtcbiAgICA+ICoge1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi14eHMgKyAxfSkge1xuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoNTAlIC0gI3skc3BhY2luZy14c30pO1xuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5wcm9ncmVzcy1wbGFjZWhvbGRlciB7XG4gIGhlaWdodDogNXB4O1xufVxuXG5tYXQtY2FyZCB7XG4gICY6bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gICAgbWFyZ2luLXRvcDogJHNwYWNpbmctcztcbiAgfVxufVxuXG5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDAgJHNwYWNpbmcteHhzO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi14eHMpIHtcbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4vL0BtZWRpYSAobWF4LXdpZHRoOiAjezIgKiAoJHBhZ2UtcGFkZGluZyArICRjYXJkLXBhZGRpbmcgKyAkZXhwYW5zaW9uLXBhbmVsLXBhZGRpbmcpICsgJG1heC1pbnB1dC1zaXplfSkge1xuLy8gIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbi8vICAgIG1heC13aWR0aDogJG1heC1pbnB1dC1zaXplO1xuLy8gICAgd2lkdGg6IDEwMCU7XG4vLyAgICBtYXJnaW46IGF1dG87XG4vLyAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy9cbi8vICAgIHBhZGRpbmctbGVmdDogMDtcbi8vICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4vLyAgfVxuLy99XG4iXX0= */';

        /***/
      },

    /***/ './src/app/pages/anime-search/anime-search.component.ts':
      /*!**************************************************************!*\
  !*** ./src/app/pages/anime-search/anime-search.component.ts ***!
  \**************************************************************/
      /*! exports provided: AnimeSearchPageComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AnimeSearchPageComponent',
          function() {
            return AnimeSearchPageComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js'
        );
        /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/material */ './node_modules/@angular/material/esm5/material.es5.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../app.constants */ './src/app/app.constants.ts'
        );
        /* harmony import */ var _modules_anime_components_mt_search_results_table_mt_search_results_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../modules/anime/components/mt-search-results-table/mt-search-results-table.component */ './src/app/modules/anime/components/mt-search-results-table/mt-search-results-table.component.ts'
        );
        /* harmony import */ var _modules_anime_domain_media_domain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../modules/anime/domain/media.domain */ './src/app/modules/anime/domain/media.domain.ts'
        );
        /* harmony import */ var _modules_anime_services_anime_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../modules/anime/services/anime.service */ './src/app/modules/anime/services/anime.service.ts'
        );
        /* harmony import */ var _modules_shared_components_with_observable_on_destroy_with_observable_on_destroy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../modules/shared/components/with-observable-on-destroy/with-observable-on-destroy.component */ './src/app/modules/shared/components/with-observable-on-destroy/with-observable-on-destroy.component.ts'
        );
        /* harmony import */ var _modules_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../modules/shared/services/auth.service */ './src/app/modules/shared/services/auth.service.ts'
        );
        /* harmony import */ var _modules_shared_services_title_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../modules/shared/services/title.service */ './src/app/modules/shared/services/title.service.ts'
        );
        /* harmony import */ var _modules_shared_store_auth_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../modules/shared/store/auth.store */ './src/app/modules/shared/store/auth.store.ts'
        );
        /* harmony import */ var _modules_shared_types_anilist_media_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../modules/shared/types/anilist/media.types */ './src/app/modules/shared/types/anilist/media.types.ts'
        );
        /* harmony import */ var _utils_generic_util__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../utils/generic.util */ './src/app/utils/generic.util.ts'
        );
        var __extends =
          (undefined && undefined.__extends) ||
          (function() {
            var extendStatics = function(d, b) {
              extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype =
                b === null
                  ? Object.create(b)
                  : ((__.prototype = b.prototype), new __());
            };
          })();
        var __assign =
          (undefined && undefined.__assign) ||
          function() {
            __assign =
              Object.assign ||
              function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                  s = arguments[i];
                  for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
              };
            return __assign.apply(this, arguments);
          };
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var AnimeSearchPageComponent = /** @class */ (function(_super) {
          __extends(AnimeSearchPageComponent, _super);
          function AnimeSearchPageComponent(
            router,
            activatedRoute,
            titleService,
            translateService,
            animeService,
            authService,
            authStore,
            formBuilder
          ) {
            var _this = _super.call(this) || this;
            _this.router = router;
            _this.activatedRoute = activatedRoute;
            _this.titleService = titleService;
            _this.translateService = translateService;
            _this.animeService = animeService;
            _this.authService = authService;
            _this.authStore = authStore;
            _this.formBuilder = formBuilder;
            _this.mediaFormats =
              _modules_shared_types_anilist_media_types__WEBPACK_IMPORTED_MODULE_15__[
                'mediaFormats'
              ];
            _this.mediaStatuses =
              _modules_shared_types_anilist_media_types__WEBPACK_IMPORTED_MODULE_15__[
                'mediaStatuses'
              ];
            _this.onListOptions = [true, false, undefined];
            _this.minYear = 1900;
            _this.maxYear = new Date().getFullYear() + 1;
            _this.titleService.setTitle(
              _this.translateService.instant('anime.search.title')
            );
            _this.user = _this.authStore.getUser();
            _this.setupForm();
            _this.animeService
              .getAnimeGenres()
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__['tap'])(
                  function(mediaGenres) {
                    return (_this.mediaGenres = mediaGenres);
                  }
                )
              )
              .subscribe();
            _this.authService.userChange
              .pipe(
                Object(
                  rxjs_operators__WEBPACK_IMPORTED_MODULE_6__['takeUntil']
                )(_this.destroyed$),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__['tap'])(
                  function(user) {
                    _this.user = user;
                  }
                )
              )
              .subscribe();
            return _this;
          }
          AnimeSearchPageComponent.prototype.ngOnInit = function() {
            var _this = this;
            var queryParams = this.activatedRoute.snapshot.queryParams;
            var fieldKeys = Object.keys(queryParams);
            if (fieldKeys.length) {
              Object.keys(queryParams).forEach(function(fieldKey) {
                var field = _this.searchForm.controls[fieldKey];
                var value = JSON.parse(queryParams[fieldKey]);
                if (
                  field &&
                  _utils_generic_util__WEBPACK_IMPORTED_MODULE_16__[
                    'GenericUtil'
                  ].isSet(value)
                ) {
                  field.setValue(value);
                }
              });
              this.sort = queryParams.sort
                ? JSON.parse(queryParams.sort)
                : this.sort;
              this.expansionPanel.open();
              this.search();
            }
          };
          AnimeSearchPageComponent.prototype.clearFilters = function(event) {
            this.preventDefault(event);
            this.setupForm();
            this.updateQueryParams();
          };
          AnimeSearchPageComponent.prototype.search = function(
            pageIndex,
            perPage
          ) {
            var _this = this;
            _utils_generic_util__WEBPACK_IMPORTED_MODULE_16__[
              'GenericUtil'
            ].scrollToRef(this.resultsTable);
            this.updateQueryParams();
            this.searching = true;
            this.error = undefined;
            var filters = this.searchForm.value;
            var query = __assign({}, filters, {
              startDateSmallerThan:
                filters.startDateSmallerThan &&
                Object(
                  _modules_anime_domain_media_domain__WEBPACK_IMPORTED_MODULE_9__[
                    'getDateScalarFromYear'
                  ]
                )(filters.startDateSmallerThan),
              startDateGreaterThan:
                filters.startDateGreaterThan &&
                Object(
                  _modules_anime_domain_media_domain__WEBPACK_IMPORTED_MODULE_9__[
                    'getDateScalarFromYear'
                  ]
                )(filters.startDateGreaterThan),
              averageScoreGreaterThan:
                filters.averageScoreGreaterThan &&
                filters.averageScoreGreaterThan * 10,
              averageScoreSmallerThan:
                filters.averageScoreSmallerThan &&
                filters.averageScoreSmallerThan * 10,
              sort: this.sort
            });
            this.animeService
              .searchAnime(query, {
                pageIndex: pageIndex,
                perPage: perPage
              })
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__['tap'])(
                  function(response) {
                    _this.noResults = response.media.length < 1;
                    _this.animeList = response.media;
                    _this.pagination = response.pageInfo;
                    _this.pagination.pageIndex =
                      response.pageInfo.currentPage - 1;
                    _this.searching = false;
                  }
                ),
                Object(
                  rxjs_operators__WEBPACK_IMPORTED_MODULE_6__['catchError']
                )(function(error) {
                  _this.error = error;
                  _this.noResults = false;
                  _this.searching = false;
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__['of'])();
                })
              )
              .subscribe();
          };
          AnimeSearchPageComponent.prototype.changePage = function(pageEvent) {
            this.search(pageEvent.pageIndex + 1, pageEvent.pageSize);
          };
          AnimeSearchPageComponent.prototype.sortBy = function(mediaSort) {
            this.sort = mediaSort;
            this.search();
          };
          AnimeSearchPageComponent.prototype.preventDefault = function(event) {
            if (event) {
              event.preventDefault();
            }
          };
          AnimeSearchPageComponent.prototype.setupForm = function() {
            this.searchForm = this.formBuilder.group({
              search: [''],
              startDateGreaterThan: [
                undefined,
                [
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].min(
                    this.minYear
                  ),
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].max(
                    this.maxYear
                  )
                ]
              ],
              startDateSmallerThan: [
                undefined,
                [
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].min(
                    this.minYear
                  ),
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].max(
                    this.maxYear
                  )
                ]
              ],
              averageScoreGreaterThan: [
                undefined,
                [
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].min(
                    0
                  ),
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].max(
                    10
                  )
                ]
              ],
              averageScoreSmallerThan: [
                undefined,
                [
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].min(
                    0
                  ),
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].max(
                    10
                  )
                ]
              ],
              genreIn: [[]],
              genreNotIn: [[]],
              formatIn: [[]],
              formatNotIn: [[]],
              statusIn: [[]],
              statusNotIn: [[]],
              onList: [undefined]
            });
          };
          AnimeSearchPageComponent.prototype.updateQueryParams = function() {
            var queryParams = {
              sort: JSON.stringify(this.sort)
            };
            var filters = this.searchForm.value;
            Object.keys(filters).forEach(function(fieldKey) {
              var field = filters[fieldKey];
              if (
                _utils_generic_util__WEBPACK_IMPORTED_MODULE_16__[
                  'GenericUtil'
                ].isSet(field) &&
                field.length !== 0
              ) {
                queryParams[fieldKey] = JSON.stringify(field);
              }
            });
            this.router.navigate(
              [_app_constants__WEBPACK_IMPORTED_MODULE_7__['animeSearchUrl']],
              { queryParams: queryParams }
            );
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                _angular_material__WEBPACK_IMPORTED_MODULE_2__[
                  'MatExpansionPanel'
                ]
              ),
              __metadata(
                'design:type',
                _angular_material__WEBPACK_IMPORTED_MODULE_2__[
                  'MatExpansionPanel'
                ]
              )
            ],
            AnimeSearchPageComponent.prototype,
            'expansionPanel',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                _modules_anime_components_mt_search_results_table_mt_search_results_table_component__WEBPACK_IMPORTED_MODULE_8__[
                  'MtSearchResultsTableComponent'
                ],
                {
                  read: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef']
                }
              ),
              __metadata(
                'design:type',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef']
              )
            ],
            AnimeSearchPageComponent.prototype,
            'resultsTable',
            void 0
          );
          AnimeSearchPageComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-anime-search',
                template: __webpack_require__(
                  /*! ./anime-search.component.html */ './src/app/pages/anime-search/anime-search.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./anime-search.component.scss */ './src/app/pages/anime-search/anime-search.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__['Router'],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__['ActivatedRoute'],
                _modules_shared_services_title_service__WEBPACK_IMPORTED_MODULE_13__[
                  'TitleService'
                ],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__[
                  'TranslateService'
                ],
                _modules_anime_services_anime_service__WEBPACK_IMPORTED_MODULE_10__[
                  'AnimeService'
                ],
                _modules_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_12__[
                  'AuthService'
                ],
                _modules_shared_store_auth_store__WEBPACK_IMPORTED_MODULE_14__[
                  'AuthStore'
                ],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormBuilder']
              ])
            ],
            AnimeSearchPageComponent
          );
          return AnimeSearchPageComponent;
        })(
          _modules_shared_components_with_observable_on_destroy_with_observable_on_destroy_component__WEBPACK_IMPORTED_MODULE_11__[
            'WithObservableOnDestroy'
          ]
        );

        /***/
      },

    /***/ './src/app/pages/dashboard/dashboard.component.html':
      /*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="columns-wrapper">\n  <div class="column left-sidebar">\n    <mt-recently-updated-list-entries></mt-recently-updated-list-entries>\n  </div>\n  <div class="column main-content">\n    <mat-card class="warning">\n      <h4>\n        <fa-icon name="exclamation-triangle" class="margin-right-xxs"></fa-icon>\n        {{ \'generic.workInProgress\' | translate }}\n      </h4>\n    </mat-card>\n    <!--<mt-list-related-media></mt-list-related-media>-->\n  </div>\n  <div class="column right-sidebar">\n    <mt-recently-finished-media></mt-recently-finished-media>\n  </div>\n</div>\n';

        /***/
      },

    /***/ './src/app/pages/dashboard/dashboard.component.scss':
      /*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\n.columns-wrapper {\n  font-size: 0; }\n.columns-wrapper > * {\n    font-size: initial; }\n.columns-wrapper .column {\n    padding: 0 6px;\n    vertical-align: top;\n    display: inline-block;\n    box-sizing: border-box; }\n.columns-wrapper .column.left-sidebar {\n      width: 440px;\n      padding-left: 0; }\n.columns-wrapper .column.main-content {\n      width: calc(100% - 880px); }\n.columns-wrapper .column.right-sidebar {\n      width: 440px;\n      padding-right: 0; }\n@media (max-width: 1360px) {\n      .columns-wrapper .column {\n        padding: 6px 0;\n        width: 100% !important; }\n        .columns-wrapper .column.left-sidebar, .columns-wrapper .column.right-sidebar {\n          float: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL1o6XFxUeHVzXFxQcm9qZWN0c1xcd2ViXFx1bm9mZmljaWFsLW5nNS1hbmlsaXN0LWNsaWVudC9zcmNcXGFwcFxcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL1o6XFxUeHVzXFxQcm9qZWN0c1xcd2ViXFx1bm9mZmljaWFsLW5nNS1hbmlsaXN0LWNsaWVudC9zcmNcXGFwcFxccGFnZXNcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQUE7QUFZQSxlQUFBO0FBUUEsaUJBQUE7QUFTQSxhQUFBO0FBSUEsV0FBQTtBQUlBLFlBQUE7QUFPQSxhQUFBO0FDMUNBO0VBQ0UsWUFBWSxFQUFBO0FBRGQ7SUFJSSxrQkFBa0IsRUFBQTtBQUp0QjtJQVVJLGNBRDZCO0lBRTdCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsc0JBQXNCLEVBQUE7QUFiMUI7TUFnQk0sWUFSbUI7TUFTbkIsZUFBZSxFQUFBO0FBakJyQjtNQXFCTSx5QkFBeUMsRUFBQTtBQXJCL0M7TUF5Qk0sWUFqQm1CO01Ba0JuQixnQkFBZ0IsRUFBQTtBQUdsQjtNQTdCSjtRQThCTSxjQUFtQjtRQUNuQixzQkFBc0IsRUFBQTtRQS9CNUI7VUFtQ1EsV0FBVyxFQUFBLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3BhY2luZyAqL1xuJHNwYWNpbmcteHh4eHM6IDJweDtcbiRzcGFjaW5nLXh4eHM6IDRweDtcbiRzcGFjaW5nLXh4czogOHB4O1xuJHNwYWNpbmcteHM6IDE2cHg7XG4kc3BhY2luZy1zOiAyNHB4O1xuJHNwYWNpbmctbTogMzJweDtcbiRzcGFjaW5nLWw6IDQ4cHg7XG4kc3BhY2luZy14bDogNjRweDtcbiRzcGFjaW5nLXh4bDogOTZweDtcbiRzcGFjaW5nLXh4eGw6IDEyOHB4O1xuXG4vKiBmb250IHNpemVzICovXG4kZm9udC1zaXplLXhzOiAxMnB4O1xuJGZvbnQtc2l6ZS1zOiAxNHB4O1xuJGZvbnQtc2l6ZS1tOiAxNnB4O1xuJGZvbnQtc2l6ZS1sOiAyMHB4O1xuJGZvbnQtc2l6ZS14bDogMjRweDtcbiRmb250LXNpemUteHhsOiAyOHB4O1xuXG4vKiBkZXZpY2Ugc2l6ZXMgKi9cbiRzY3JlZW4teHh4czogMzIwcHg7XG4kc2NyZWVuLXh4czogNDgwcHg7XG4kc2NyZWVuLXhzOiA1NzZweDtcbiRzY3JlZW4tczogNzY4cHg7XG4kc2NyZWVuLW06IDEwMjRweDtcbiRzY3JlZW4tbDogMTM2MHB4O1xuJHNjcmVlbi14bDogMTkyMHB4O1xuXG4vKiBtYXRlcmlhbCAqL1xuJG1hdC10b29sYmFyLWhlaWdodDogNjRweDtcbiRtYXQtc3Bpbm5lci1zaXplOiAxMjhweDtcblxuLyogbW9kYWxzICovXG4kbW9kYWwtaGVhZGVyLWhlaWdodDogNzBweDtcbiRtb2RhbC1mb290ZXItaGVpZ2h0OiA4NHB4O1xuXG4vKiBnZW5lcmljICovXG4kcGFnZS1wYWRkaW5nOiAkc3BhY2luZy1tO1xuJGNhcmQtcGFkZGluZzogJHNwYWNpbmctcztcbiRleHBhbnNpb24tcGFuZWwtcGFkZGluZzogJHNwYWNpbmctcztcbiRtYXgtaW5wdXQtc2l6ZTogNjQwcHg7XG4kc2VwYXJhdG9yLXRoaWNrbmVzczogMXB4O1xuXG4vKiBzcGVjaWZpYyAqL1xuJGZvb3Rlci1oZWlnaHQ6IDEwM3B4O1xuIiwiQGltcG9ydCAnc3JjL2FwcC9zdHlsZXMvdmFyaWFibGVzJztcblxuLmNvbHVtbnMtd3JhcHBlciB7XG4gIGZvbnQtc2l6ZTogMDtcblxuICA+ICoge1xuICAgIGZvbnQtc2l6ZTogaW5pdGlhbDtcbiAgfVxuXG4gIC5jb2x1bW4ge1xuICAgICRzaWRlYmFyLXdpZHRoOiA0NDBweDtcbiAgICAkcGFkZGluZzogJHNwYWNpbmcteHh4cyAqIDEuNTtcbiAgICBwYWRkaW5nOiAwICRwYWRkaW5nO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAmLmxlZnQtc2lkZWJhciB7XG4gICAgICB3aWR0aDogJHNpZGViYXItd2lkdGg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgJi5tYWluLWNvbnRlbnQge1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtICN7JHNpZGViYXItd2lkdGggKiAyfSk7XG4gICAgfVxuXG4gICAgJi5yaWdodC1zaWRlYmFyIHtcbiAgICAgIHdpZHRoOiAkc2lkZWJhci13aWR0aDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbCkge1xuICAgICAgcGFkZGluZzogJHBhZGRpbmcgMDtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cbiAgICAgICYubGVmdC1zaWRlYmFyLFxuICAgICAgJi5yaWdodC1zaWRlYmFyIHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */';

        /***/
      },

    /***/ './src/app/pages/dashboard/dashboard.component.ts':
      /*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
      /*! exports provided: DashboardPageComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DashboardPageComponent',
          function() {
            return DashboardPageComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _modules_shared_services_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../modules/shared/services/title.service */ './src/app/modules/shared/services/title.service.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var DashboardPageComponent = /** @class */ (function() {
          function DashboardPageComponent(titleService, translateService) {
            this.titleService = titleService;
            this.translateService = translateService;
            this.titleService.setTitle(
              this.translateService.instant('anime.dashboard.title')
            );
          }
          DashboardPageComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-dashboard',
                template: __webpack_require__(
                  /*! ./dashboard.component.html */ './src/app/pages/dashboard/dashboard.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dashboard.component.scss */ './src/app/pages/dashboard/dashboard.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _modules_shared_services_title_service__WEBPACK_IMPORTED_MODULE_2__[
                  'TitleService'
                ],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__[
                  'TranslateService'
                ]
              ])
            ],
            DashboardPageComponent
          );
          return DashboardPageComponent;
        })();

        /***/
      },

    /***/ './src/app/pages/login/login.component.html':
      /*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="narrow-page">\n\n  <mat-card>\n    <div class="text-center vertical-padding-m">\n      <h2>\n        <a [href]=apiLoginUrl>Log in with AniList</a>\n      </h2>\n    </div>\n  </mat-card>\n\n</div>';

        /***/
      },

    /***/ './src/app/pages/login/login.component.scss':
      /*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */';

        /***/
      },

    /***/ './src/app/pages/login/login.component.ts':
      /*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
      /*! exports provided: LoginPageComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'LoginPageComponent',
          function() {
            return LoginPageComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../app.constants */ './src/app/app.constants.ts'
        );
        /* harmony import */ var _modules_shared_services_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../modules/shared/services/title.service */ './src/app/modules/shared/services/title.service.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var LoginPageComponent = /** @class */ (function() {
          function LoginPageComponent(titleService) {
            this.titleService = titleService;
            this.apiLoginUrl =
              _app_constants__WEBPACK_IMPORTED_MODULE_1__['apiLoginUrl'];
            this.titleService.setTitle();
          }
          LoginPageComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-login',
                template: __webpack_require__(
                  /*! ./login.component.html */ './src/app/pages/login/login.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./login.component.scss */ './src/app/pages/login/login.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _modules_shared_services_title_service__WEBPACK_IMPORTED_MODULE_2__[
                  'TitleService'
                ]
              ])
            ],
            LoginPageComponent
          );
          return LoginPageComponent;
        })();

        /***/
      },

    /***/ './src/app/pages/page-not-found/page-not-found.component.html':
      /*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.html ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<mat-card class="inline-block text-center">\n  <fa-icon name="exclamation-circle" class="fa-10x"></fa-icon>\n  <h1>\n    {{ \'app.pageNotFound\' | translate }}\n  </h1>\n</mat-card>\n';

        /***/
      },

    /***/ './src/app/pages/page-not-found/page-not-found.component.scss':
      /*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.scss ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */';

        /***/
      },

    /***/ './src/app/pages/page-not-found/page-not-found.component.ts':
      /*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
      /*! exports provided: PageNotFoundPageComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PageNotFoundPageComponent',
          function() {
            return PageNotFoundPageComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _modules_shared_services_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../modules/shared/services/title.service */ './src/app/modules/shared/services/title.service.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var PageNotFoundPageComponent = /** @class */ (function() {
          function PageNotFoundPageComponent(titleService, translateService) {
            this.titleService = titleService;
            this.translateService = translateService;
            this.titleService.setTitle(
              this.translateService.instant('app.pageNotFound')
            );
          }
          PageNotFoundPageComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-page-not-found',
                template: __webpack_require__(
                  /*! ./page-not-found.component.html */ './src/app/pages/page-not-found/page-not-found.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./page-not-found.component.scss */ './src/app/pages/page-not-found/page-not-found.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _modules_shared_services_title_service__WEBPACK_IMPORTED_MODULE_2__[
                  'TitleService'
                ],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__[
                  'TranslateService'
                ]
              ])
            ],
            PageNotFoundPageComponent
          );
          return PageNotFoundPageComponent;
        })();

        /***/
      },

    /***/ './src/app/pages/user-anime-list/user-anime-list.component.html':
      /*!**********************************************************************!*\
  !*** ./src/app/pages/user-anime-list/user-anime-list.component.html ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="narrow-page">\n  <mat-card *ngIf="!user" class="alert warning">\n    <h4>\n      <fa-icon name="exclamation-circle" class="margin-right-xxs"></fa-icon>\n      {{ \'user.notLoggedIn\' | translate }}\n    </h4>\n  </mat-card>\n\n  <mat-spinner *ngIf="user && !ready" mode="indeterminate" class="full-page"></mat-spinner>\n\n  <div *ngIf="user && ready && !errorGotten">\n    <div *ngIf="statuses && statuses.length">\n      <mat-card class="table-filter">\n        <mat-form-field class="full-width">\n          <input\n            matInput\n            placeholder="{{ \'anime.search.filters.byTitle\' | translate }}"\n            (keyup)="applyFilter($event.target.value)"\n          />\n        </mat-form-field>\n      </mat-card>\n\n      <mat-card class="margin-top-s">\n        <h3>{{ \'anime.userList.show\' | translate }} / {{ \'anime.userList.goTo\' | translate }}</h3>\n\n        <div class="statuses-wrapper">\n          <span *ngFor="let status of statuses" class="status-wrapper">\n            <div *ngIf="hasDataOfStatus(status.value)">\n              <mat-checkbox [(ngModel)]="status.shown">\n                {{ \'anime.statusValues.\' + status.value | translate }}\n              </mat-checkbox>\n\n              <a href="{{ \'/user-anime-list#\' + status.value }}" class="go-to-link">\n                <fa-icon name="arrow-down" class="vertically-centered margin-left-xxxs"></fa-icon>\n              </a>\n            </div>\n          </span>\n        </div>\n      </mat-card>\n\n      <div *ngFor="let status of statuses">\n        <div id="{{ status.value }}" *ngIf="status.shown && hasDataOfStatus(status.value)" class="status-table-wrapper">\n          <mt-user-anime-list-table\n            [tableStatus]="status.value"\n            [tableData]="statusObjects[status.value]"\n            [favouriteIDs]="favouriteIDs"\n            [filter]="filter"\n            (onEntryUpdate)="onEntryUpdate($event)"\n          >\n          </mt-user-anime-list-table>\n        </div>\n      </div>\n\n      <div class="padding-top-xs padding-bottom-m">\n        <h3>\n          {{ \'settings.title\' | translate }}\n        </h3>\n\n        <mat-slide-toggle [checked]="reloadOnUpdate" (change)="reloadOnUpdate = !reloadOnUpdate">\n          {{ \'settings.reloadOnUpdate\' | translate }}\n        </mat-slide-toggle>\n      </div>\n\n      <mt-genres-overview [genreStatsList]="user.stats.favouredGenresOverview"> </mt-genres-overview>\n    </div>\n\n    <mat-card *ngIf="ready && !error && (!statuses || !statuses.length)">\n      <h4>\n        <fa-icon name="exclamation-circle" class="margin-right-xxs"></fa-icon>\n        {{ \'anime.userList.noEntries\' | translate }}\n      </h4>\n    </mat-card>\n  </div>\n\n  <mat-card *ngIf="error" class="error">\n    <h4>\n      <fa-icon name="exclamation-circle" class="margin-right-xxs"></fa-icon>\n      {{ error }}\n    </h4>\n  </mat-card>\n</div>\n';

        /***/
      },

    /***/ './src/app/pages/user-anime-list/user-anime-list.component.scss':
      /*!**********************************************************************!*\
  !*** ./src/app/pages/user-anime-list/user-anime-list.component.scss ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* modals */\n/* generic */\n/* specific */\n.table-filter {\n  padding-top: 8px !important;\n  padding-bottom: 0 !important; }\n.statuses-wrapper mat-checkbox {\n  display: inline-block;\n  vertical-align: text-bottom; }\n.statuses-wrapper .status-wrapper {\n  margin-right: 16px;\n  display: inline-block;\n  min-width: 104px; }\n.statuses-wrapper .status-wrapper .go-to-link {\n    height: 24px;\n    display: inline-block;\n    vertical-align: top; }\n.status-table-wrapper:not(:last-of-type) {\n  margin-bottom: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1hbmltZS1saXN0L1o6XFxUeHVzXFxQcm9qZWN0c1xcd2ViXFx1bm9mZmljaWFsLW5nNS1hbmlsaXN0LWNsaWVudC9zcmNcXGFwcFxcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvdXNlci1hbmltZS1saXN0L1o6XFxUeHVzXFxQcm9qZWN0c1xcd2ViXFx1bm9mZmljaWFsLW5nNS1hbmlsaXN0LWNsaWVudC9zcmNcXGFwcFxccGFnZXNcXHVzZXItYW5pbWUtbGlzdFxcdXNlci1hbmltZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQUE7QUFZQSxlQUFBO0FBUUEsaUJBQUE7QUFTQSxhQUFBO0FBSUEsV0FBQTtBQUlBLFlBQUE7QUFPQSxhQUFBO0FDMUNBO0VBQ0UsMkJBQW9DO0VBQ3BDLDRCQUE0QixFQUFBO0FBRzlCO0VBRUkscUJBQXFCO0VBQ3JCLDJCQUEyQixFQUFBO0FBSC9CO0VBT0ksa0JEVmE7RUNXYixxQkFBcUI7RUFDckIsZ0JBQWdCLEVBQUE7QUFUcEI7SUFZTSxZRGRVO0lDZVYscUJBQXFCO0lBQ3JCLG1CQUFtQixFQUFBO0FBS3pCO0VBRUksbUJBQXdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VyLWFuaW1lLWxpc3QvdXNlci1hbmltZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3BhY2luZyAqL1xuJHNwYWNpbmcteHh4eHM6IDJweDtcbiRzcGFjaW5nLXh4eHM6IDRweDtcbiRzcGFjaW5nLXh4czogOHB4O1xuJHNwYWNpbmcteHM6IDE2cHg7XG4kc3BhY2luZy1zOiAyNHB4O1xuJHNwYWNpbmctbTogMzJweDtcbiRzcGFjaW5nLWw6IDQ4cHg7XG4kc3BhY2luZy14bDogNjRweDtcbiRzcGFjaW5nLXh4bDogOTZweDtcbiRzcGFjaW5nLXh4eGw6IDEyOHB4O1xuXG4vKiBmb250IHNpemVzICovXG4kZm9udC1zaXplLXhzOiAxMnB4O1xuJGZvbnQtc2l6ZS1zOiAxNHB4O1xuJGZvbnQtc2l6ZS1tOiAxNnB4O1xuJGZvbnQtc2l6ZS1sOiAyMHB4O1xuJGZvbnQtc2l6ZS14bDogMjRweDtcbiRmb250LXNpemUteHhsOiAyOHB4O1xuXG4vKiBkZXZpY2Ugc2l6ZXMgKi9cbiRzY3JlZW4teHh4czogMzIwcHg7XG4kc2NyZWVuLXh4czogNDgwcHg7XG4kc2NyZWVuLXhzOiA1NzZweDtcbiRzY3JlZW4tczogNzY4cHg7XG4kc2NyZWVuLW06IDEwMjRweDtcbiRzY3JlZW4tbDogMTM2MHB4O1xuJHNjcmVlbi14bDogMTkyMHB4O1xuXG4vKiBtYXRlcmlhbCAqL1xuJG1hdC10b29sYmFyLWhlaWdodDogNjRweDtcbiRtYXQtc3Bpbm5lci1zaXplOiAxMjhweDtcblxuLyogbW9kYWxzICovXG4kbW9kYWwtaGVhZGVyLWhlaWdodDogNzBweDtcbiRtb2RhbC1mb290ZXItaGVpZ2h0OiA4NHB4O1xuXG4vKiBnZW5lcmljICovXG4kcGFnZS1wYWRkaW5nOiAkc3BhY2luZy1tO1xuJGNhcmQtcGFkZGluZzogJHNwYWNpbmctcztcbiRleHBhbnNpb24tcGFuZWwtcGFkZGluZzogJHNwYWNpbmctcztcbiRtYXgtaW5wdXQtc2l6ZTogNjQwcHg7XG4kc2VwYXJhdG9yLXRoaWNrbmVzczogMXB4O1xuXG4vKiBzcGVjaWZpYyAqL1xuJGZvb3Rlci1oZWlnaHQ6IDEwM3B4O1xuIiwiQGltcG9ydCAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XG5cbi50YWJsZS1maWx0ZXIge1xuICBwYWRkaW5nLXRvcDogJHNwYWNpbmcteHhzICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5zdGF0dXNlcy13cmFwcGVyIHtcbiAgbWF0LWNoZWNrYm94IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICB9XG5cbiAgLnN0YXR1cy13cmFwcGVyIHtcbiAgICBtYXJnaW4tcmlnaHQ6ICRzcGFjaW5nLXhzO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtaW4td2lkdGg6IDEwNHB4O1xuXG4gICAgLmdvLXRvLWxpbmsge1xuICAgICAgaGVpZ2h0OiAkc3BhY2luZy1zO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB9XG4gIH1cbn1cblxuLnN0YXR1cy10YWJsZS13cmFwcGVyIHtcbiAgJjpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICAgIG1hcmdpbi1ib3R0b206ICRzcGFjaW5nLWwgLSAkc3BhY2luZy14eHM7XG4gIH1cbn1cbiJdfQ== */';

        /***/
      },

    /***/ './src/app/pages/user-anime-list/user-anime-list.component.ts':
      /*!********************************************************************!*\
  !*** ./src/app/pages/user-anime-list/user-anime-list.component.ts ***!
  \********************************************************************/
      /*! exports provided: UserAnimeListPageComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'UserAnimeListPageComponent',
          function() {
            return UserAnimeListPageComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../app.constants */ './src/app/app.constants.ts'
        );
        /* harmony import */ var _modules_anime_services_anime_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../modules/anime/services/anime.service */ './src/app/modules/anime/services/anime.service.ts'
        );
        /* harmony import */ var _modules_shared_services_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../modules/shared/services/title.service */ './src/app/modules/shared/services/title.service.ts'
        );
        /* harmony import */ var _modules_shared_store_auth_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../modules/shared/store/auth.store */ './src/app/modules/shared/store/auth.store.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var UserAnimeListPageComponent = /** @class */ (function() {
          function UserAnimeListPageComponent(
            router,
            titleService,
            translateService,
            animeService,
            authStore
          ) {
            this.router = router;
            this.titleService = titleService;
            this.translateService = translateService;
            this.animeService = animeService;
            this.authStore = authStore;
            this.reloadOnUpdate = true;
            this.titleService.setTitle(
              this.translateService.instant('anime.userList.title')
            );
            this.user = this.authStore.getUser();
            this.loggedIn = this.user !== undefined;
            if (!this.loggedIn) {
              this.router.navigate([
                _app_constants__WEBPACK_IMPORTED_MODULE_5__['rootUrl']
              ]);
            }
            this.updateListData();
          }
          UserAnimeListPageComponent.prototype.getUserList = function() {
            var _this = this;
            if (this.user) {
              this.animeService
                .getAnimeList(this.user)
                .pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['tap'])(
                    function(response) {
                      _this.statusObjects = response;
                      _this.statuses = Object.keys(response)
                        .sort()
                        .map(function(status) {
                          return {
                            value: status,
                            shown: true
                          };
                        });
                      _this.ready = true;
                    }
                  ),
                  Object(
                    rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['catchError']
                  )(function(error) {
                    _this.error = error;
                    _this.ready = true;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__['of'])();
                  })
                )
                .subscribe();
            }
          };
          UserAnimeListPageComponent.prototype.getListFavouriteIDs = function() {
            var _this = this;
            if (this.user) {
              this.animeService.getAnimeListFavouriteIDs(this.user, function(
                favouriteIDs
              ) {
                _this.favouriteIDs = favouriteIDs;
              });
            }
          };
          UserAnimeListPageComponent.prototype.hasDataOfStatus = function(
            status
          ) {
            return (
              this.statusObjects &&
              this.statusObjects[status] &&
              this.statusObjects[status].length > 0
            );
          };
          UserAnimeListPageComponent.prototype.applyFilter = function(
            filterValue
          ) {
            this.filter = filterValue.trim().toLowerCase();
          };
          UserAnimeListPageComponent.prototype.getListAsString = function() {
            return JSON.stringify(this.statusObjects, undefined, 2);
          };
          UserAnimeListPageComponent.prototype.onEntryUpdate = function(
            listEntry
          ) {
            if (this.reloadOnUpdate) {
              this.updateListData();
            }
          };
          UserAnimeListPageComponent.prototype.updateListData = function() {
            this.statusObjects = undefined;
            this.statuses = undefined;
            this.favouriteIDs = undefined;
            this.ready = false;
            this.getUserList();
            this.getListFavouriteIDs();
          };
          UserAnimeListPageComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'mt-user-anime-list',
                template: __webpack_require__(
                  /*! ./user-anime-list.component.html */ './src/app/pages/user-anime-list/user-anime-list.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./user-anime-list.component.scss */ './src/app/pages/user-anime-list/user-anime-list.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__['Router'],
                _modules_shared_services_title_service__WEBPACK_IMPORTED_MODULE_7__[
                  'TitleService'
                ],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__[
                  'TranslateService'
                ],
                _modules_anime_services_anime_service__WEBPACK_IMPORTED_MODULE_6__[
                  'AnimeService'
                ],
                _modules_shared_store_auth_store__WEBPACK_IMPORTED_MODULE_8__[
                  'AuthStore'
                ]
              ])
            ],
            UserAnimeListPageComponent
          );
          return UserAnimeListPageComponent;
        })();

        /***/
      },

    /***/ './src/app/utils/generic.util.ts':
      /*!***************************************!*\
  !*** ./src/app/utils/generic.util.ts ***!
  \***************************************/
      /*! exports provided: GenericUtil */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'GenericUtil',
          function() {
            return GenericUtil;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };

        var GenericUtil = /** @class */ (function() {
          function GenericUtil() {}
          GenericUtil.isSet = function(variable) {
            return variable !== undefined && variable !== null;
          };
          GenericUtil.scrollTo = function(element) {
            if (element) {
              element.scrollIntoView({ block: 'start', behavior: 'smooth' });
            }
          };
          GenericUtil.scrollToRef = function(elementRef) {
            if (elementRef && elementRef.nativeElement) {
              this.scrollTo(elementRef.nativeElement);
            }
          };
          GenericUtil = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])()
            ],
            GenericUtil
          );
          return GenericUtil;
        })();

        /***/
      },

    /***/ './src/app/utils/local-storage.util.ts':
      /*!*********************************************!*\
  !*** ./src/app/utils/local-storage.util.ts ***!
  \*********************************************/
      /*! exports provided: LocalStorage */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'LocalStorage',
          function() {
            return LocalStorage;
          }
        );
        var LocalStorage = /** @class */ (function() {
          function LocalStorage() {}
          LocalStorage.setString = function(key, value) {
            localStorage.setItem(key, value);
          };
          LocalStorage.getString = function(key) {
            return localStorage.getItem(key);
          };
          LocalStorage.remove = function(key) {
            localStorage.removeItem(key);
          };
          LocalStorage.setObject = function(key, json) {
            localStorage.setItem(key, JSON.stringify(json));
          };
          LocalStorage.getObject = function(key) {
            var jsonString = localStorage.getItem(key);
            return jsonString && JSON.parse(jsonString);
          };
          return LocalStorage;
        })();

        /***/
      },

    /***/ './src/environments/environment.ts':
      /*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
      /*! exports provided: environment */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'environment',
          function() {
            return environment;
          }
        );
        var environment = {
          anilist_client_id: 1364,
          production: true
        };

        /***/
      },

    /***/ './src/main.ts':
      /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/platform-browser-dynamic */ './node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js'
        );
        /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./app/app.module */ './src/app/app.module.ts'
        );
        /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./environments/environment */ './src/environments/environment.ts'
        );

        if (
          _environments_environment__WEBPACK_IMPORTED_MODULE_3__['environment']
            .production
        ) {
          Object(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['enableProdMode']
          )();
        }
        Object(
          _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__[
            'platformBrowserDynamic'
          ]
        )()
          .bootstrapModule(
            _app_app_module__WEBPACK_IMPORTED_MODULE_2__['AppModule']
          )
          .catch(function(err) {
            return console.log(err);
          });

        /***/
      },

    /***/ 0:
      /*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__('./src/main.ts');

        /***/
      }
  },
  [[0, 'runtime', 'vendor']]
]);
//# sourceMappingURL=main.js.map

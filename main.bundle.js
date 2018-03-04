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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"content-wrapper\">\n  <div class=\"page-wrapper\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n<app-footer></app-footer>"

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
            selector: 'app-root',
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiLoginUrl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");

var apiLoginUrl = "https://anilist.co/api/v2/oauth/authorize?client_id=" + __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].anilist_client_id + "&response_type=token";


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_material_module__ = __webpack_require__("../../../../../src/app/modules/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_anime_service__ = __webpack_require__("../../../../../src/app/providers/anime.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_sort__ = __webpack_require__("../../../../../src/app/pipes/sort.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_anime_search_anime_search_component__ = __webpack_require__("../../../../../src/app/pages/anime-search/anime-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_user_list_user_list_component__ = __webpack_require__("../../../../../src/app/pages/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_search_results_table_search_results_table_component__ = __webpack_require__("../../../../../src/app/components/search-results-table/search-results-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_user_list_table_user_list_table_component__ = __webpack_require__("../../../../../src/app/components/user-list-table/user-list-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_cover_image_cover_image_component__ = __webpack_require__("../../../../../src/app/components/cover-image/cover-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_list_entry_form_modal_list_entry_form_modal_component__ = __webpack_require__("../../../../../src/app/components/list-entry-form-modal/list-entry-form-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_genres_overview_genres_overview_component__ = __webpack_require__("../../../../../src/app/components/genres-overview/genres-overview.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* core */






/* modules */

/* components */

/* providers */

/* pipes */

/* pages */




/* components */







var appRoutes = [
    { path: '', redirectTo: '/anime-search', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__pages_login_login_component__["a" /* LoginComponent */] },
    { path: 'anime-search', component: __WEBPACK_IMPORTED_MODULE_12__pages_anime_search_anime_search_component__["a" /* AnimeSearchComponent */] },
    { path: 'user-list', component: __WEBPACK_IMPORTED_MODULE_13__pages_user_list_user_list_component__["a" /* UserListComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_10__pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_anime_search_anime_search_component__["a" /* AnimeSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_user_list_user_list_component__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_search_results_table_search_results_table_component__["a" /* SearchResultsTableComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_user_list_table_user_list_table_component__["a" /* UserListTableComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_cover_image_cover_image_component__["a" /* CoverImageComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_list_entry_form_modal_list_entry_form_modal_component__["a" /* ListEntryFormModalComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pipes_sort__["a" /* SortPipe */],
                __WEBPACK_IMPORTED_MODULE_20__components_genres_overview_genres_overview_component__["a" /* GenresOverviewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__modules_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__providers_anime_service__["a" /* AnimeService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_19__components_list_entry_form_modal_list_entry_form_modal_component__["a" /* ListEntryFormModalComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/cover-image/cover-image.component.html":
/***/ (function(module, exports) {

module.exports = "<i class=\"fa fa-bars menu-toggle clickable\" [matMenuTriggerFor]=\"entryMenu\"></i>\n\n<img [src]=\"media.coverImage.medium\">\n\n<mat-menu #entryMenu=\"matMenu\">\n  <button mat-menu-item (click)=\"saveToList()\">\n    <i class=\"fa fa-refresh fa-1x margin-right-xxxs\"></i>\n    Save to list\n  </button>\n  <button *ngIf=\"listEntry\" mat-menu-item (click)=\"toggleFavourite()\">\n    <i class=\"fa fa-star fa-1x margin-right-xxxs\"></i>\n    Toggle favourite\n  </button>\n  <button *ngIf=\"listEntry\" mat-menu-item (click)=\"deleteEntry()\">\n    <i class=\"fa fa-trash fa-1x margin-right-xxxs\"></i>\n    Delete from list\n  </button>\n  <button mat-menu-item (click)=\"viewOnAniList()\">\n    <i class=\"fa fa-external-link fa-1x margin-right-xxxs\"></i>\n    View on AniList\n  </button>\n</mat-menu>"

/***/ }),

/***/ "../../../../../src/app/components/cover-image/cover-image.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* generic */\n/* specific */\n:host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  overflow: visible; }\n\ni.fa.menu-toggle {\n  width: 24px;\n  margin-left: -24px;\n  font-size: 16px;\n  text-align: center;\n  vertical-align: bottom; }\n\nimg {\n  max-width: 88px;\n  height: auto; }\n\n@media (max-width: 480px) {\n  img {\n    max-width: 48px;\n    height: auto; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cover-image/cover-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoverImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_anime_service__ = __webpack_require__("../../../../../src/app/providers/anime.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_anilist_listEntry__ = __webpack_require__("../../../../../src/app/models/anilist/listEntry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_anilist_media__ = __webpack_require__("../../../../../src/app/models/anilist/media.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_entry_form_modal_list_entry_form_modal_component__ = __webpack_require__("../../../../../src/app/components/list-entry-form-modal/list-entry-form-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CoverImageComponent = (function () {
    function CoverImageComponent(dialog, router, matSnackBar, animeService) {
        this.dialog = dialog;
        this.router = router;
        this.matSnackBar = matSnackBar;
        this.animeService = animeService;
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.userListUrl = '/user-list';
    }
    CoverImageComponent.prototype.viewOnAniList = function () {
        window.open("https://anilist.co/anime/" + this.media.id);
    };
    CoverImageComponent.prototype.saveToList = function () {
        var _this = this;
        this.showFormModal().afterClosed().subscribe(function (result) {
            if (result) {
                if (result.savedEntry) {
                    _this.showSavedEntryToast(result.savedEntry);
                }
                if (result.deletedEntry) {
                    _this.showDeletedEntryToast(result.deletedEntry);
                }
                _this.onUpdate.emit(result.savedEntry || result.deletedEntry);
            }
        });
    };
    CoverImageComponent.prototype.toggleFavourite = function () {
        var _this = this;
        this.animeService.toggleFavouriteEntry(this.listEntry).subscribe(function (response) {
            var success = response.data.ToggleFavourite !== undefined;
            if (success) {
                _this.showToggledFavouriteToast(_this.listEntry);
                _this.onUpdate.emit(_this.listEntry);
            }
        });
    };
    CoverImageComponent.prototype.deleteEntry = function () {
        var _this = this;
        this.animeService.deleteListEntry(this.listEntry).subscribe(function (response) {
            var success = response.data.DeleteMediaListEntry.deleted === true;
            if (success) {
                _this.showDeletedEntryToast(_this.listEntry);
                _this.onUpdate.emit(_this.listEntry);
            }
        });
    };
    CoverImageComponent.prototype.showFormModal = function () {
        return this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__list_entry_form_modal_list_entry_form_modal_component__["a" /* ListEntryFormModalComponent */], {
            width: 'auto',
            maxWidth: '672px',
            data: {
                listEntryStatus: this.listEntryStatus,
                listEntry: this.listEntry,
                media: this.media
            }
        });
    };
    CoverImageComponent.prototype.showSavedEntryToast = function (listEntry) {
        this.showToast("Updated list entry for \"" + listEntry.media.title.romaji + "\"");
    };
    CoverImageComponent.prototype.showToggledFavouriteToast = function (listEntry) {
        this.showToast("Toggled entry \"" + listEntry.media.title.romaji + "\" as favourite");
    };
    CoverImageComponent.prototype.showDeletedEntryToast = function (listEntry) {
        this.showToast("Deleted list entry for \"" + listEntry.media.title.romaji + "\"");
    };
    CoverImageComponent.prototype.showToast = function (message) {
        this.matSnackBar.open(message, undefined, {
            duration: 10000,
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], CoverImageComponent.prototype, "listEntryStatus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__models_anilist_listEntry__["a" /* ListEntry */])
    ], CoverImageComponent.prototype, "listEntry", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__models_anilist_media__["a" /* Media */])
    ], CoverImageComponent.prototype, "media", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], CoverImageComponent.prototype, "onUpdate", void 0);
    CoverImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cover-image',
            template: __webpack_require__("../../../../../src/app/components/cover-image/cover-image.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cover-image/cover-image.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__providers_anime_service__["a" /* AnimeService */]])
    ], CoverImageComponent);
    return CoverImageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n\n  <div class=\"text-center\">\n    <div>\n      About\n    </div>\n\n    <div class=\"links-wrapper\">\n      <a [href]=\"gitHubProjectUrl\">\n        <i class=\"fa fa-github fa-1x\"></i> GitHub\n      </a>\n    </div>\n\n    <div class=\"about-anilist margin-top-xxs\">\n      Powered by the <mat-icon svgIcon=\"anilist\"></mat-icon> AniList API\n    </div>\n  </div>\n\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* generic */\n/* specific */\nmat-toolbar {\n  display: block;\n  height: auto;\n  padding: 16px;\n  font-size: 14px;\n  line-height: 21px; }\n  mat-toolbar .about-anilist {\n    color: #444; }\n    mat-toolbar .about-anilist .mat-icon[svgIcon=\"anilist\"] {\n      height: 12px;\n      width: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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



var FooterComponent = (function () {
    function FooterComponent(iconRegistry, sanitizer) {
        this.gitHubProjectUrl = 'https://github.com/jesuscc1993/angular-material-demo';
        iconRegistry.addSvgIcon('anilist', sanitizer.bypassSecurityTrustResourceUrl('assets/pictures/vectorial/icons/anilist.svg'));
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatIconRegistry */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/genres-overview/genres-overview.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>\n  Genres Overview\n</h3>\n\n<mat-grid-list *ngIf=\"genreStatsList && genreStatsList.length | sort: 'amount'\" [cols]=\"getColumnCount()\" rowHeight=\"32px\">\n  <mat-grid-tile *ngFor=\"let genreStats of genreStatsList\">\n    {{ genreStats.genre }} ({{ genreStats.percentage }}%)\n  </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "../../../../../src/app/components/genres-overview/genres-overview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/genres-overview/genres-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenresOverviewComponent; });
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

var GenresOverviewComponent = (function () {
    function GenresOverviewComponent() {
        this.maxColumnCount = 5;
        this.minColumnWidth = 160;
    }
    GenresOverviewComponent.prototype.ngOnInit = function () {
        var totalCount = 0;
        this.genreStatsList.forEach(function (genreStats) {
            totalCount += genreStats.amount;
        });
        this.genreStatsList.forEach(function (genreStats) {
            genreStats.percentage = Math.round(genreStats.amount * 100 / totalCount);
        });
    };
    GenresOverviewComponent.prototype.getColumnCount = function () {
        var columnCount = window.screen.width / this.minColumnWidth;
        return Math.floor(columnCount < this.maxColumnCount ? columnCount : this.maxColumnCount);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], GenresOverviewComponent.prototype, "genreStatsList", void 0);
    GenresOverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-genres-overview',
            template: __webpack_require__("../../../../../src/app/components/genres-overview/genres-overview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/genres-overview/genres-overview.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GenresOverviewComponent);
    return GenresOverviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n\n  <div>\n    <a *ngIf=\"!onRoot\" [routerLink]=\"rootUrl\">\n      <i class=\"fa fa-chevron-left fa-1x\"></i>\n      <span class=\"hide-below-s\">\n        Search\n      </span>\n    </a>\n  </div>\n\n  <div class=\"centered-content\">\n    <span class=\"hide-below-xxxs\">\n      Anime management client\n    </span>\n  </div>\n\n  <span class=\"filler\"></span>\n\n  <!-- logged in -->\n  <span *ngIf=\"user\" class=\"padding-right-xs clickable hide-below-s\" [matMenuTriggerFor]=\"userMenu\">\n    {{ user.name }}\n  </span>\n  <img *ngIf=\"user\" class=\"avatar clickable hide-below-s\" [src]=\"user.avatar.large\" [matMenuTriggerFor]=\"userMenu\">\n\n  <a *ngIf=\"user\" class=\"clickable show-below-s\" [matMenuTriggerFor]=\"userMenu\">\n    <i class=\"fa fa-bars fa-1x\"></i>\n  </a>\n\n  <mat-menu #userMenu=\"matMenu\">\n    <button mat-menu-item (click)=\"navigateToUserList()\">\n      <i class=\"fa fa-list fa-1x margin-right-xxxs\"></i>\n      View list\n    </button>\n    <button mat-menu-item (click)=\"navigateToProfile()\">\n      <i class=\"fa fa-external-link fa-1x margin-right-xxxs\"></i>\n      View profile\n    </button>\n    <button mat-menu-item (click)=\"logout()\">\n      <i class=\"fa fa-sign-out fa-1x margin-right-xxxs\"></i>\n      Log out\n    </button>\n  </mat-menu>\n\n  <!-- not logged in -->\n  <a *ngIf=\"!user && loginAvailable\" [href]=apiLoginUrl>\n    <span class=\"hide-below-s\">\n      Log in with AniList\n    </span>\n    <i class=\"fa fa-sign-in fa-1x\"></i>\n  </a>\n\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filler {\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto; }\n\n.centered-content {\n  left: 0;\n  width: 100%;\n  position: absolute;\n  text-align: center;\n  pointer-events: none; }\n\nimg.avatar {\n  max-width: 64px;\n  max-height: 100%;\n  width: auto;\n  height: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_anime_service__ = __webpack_require__("../../../../../src/app/providers/anime.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = (function () {
    function HeaderComponent(router, activatedRoute, animeService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.animeService = animeService;
        this.rootUrl = '/anime-search';
        this.userListUrl = '/user-list';
        this.tokenPrefix = '#access_token=';
        this.checkAndStoreAccessToken();
        this.subscribeToNavigation();
        this.apiLoginUrl = __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* apiLoginUrl */];
        this.user = this.animeService.getUser();
        this.loginAvailable = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].anilist_client_id >= 0;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.navigateToProfile = function () {
        window.open("https://anilist.co/user/" + this.user.name);
    };
    HeaderComponent.prototype.navigateToUserList = function (replaceUrl) {
        this.router.navigate([this.userListUrl], {
            replaceUrl: replaceUrl
        });
    };
    HeaderComponent.prototype.logout = function () {
        this.animeService.removeAccessToken();
        this.animeService.removeUser();
        this.user = undefined;
        this.loginAvailable = !this.user && __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].anilist_client_id >= 0;
        this.router.navigate([this.rootUrl]);
    };
    HeaderComponent.prototype.subscribeToNavigation = function () {
        var _this = this;
        this.router.events.subscribe(function () {
            _this.onRoot = location.href.indexOf(_this.rootUrl) >= 0;
        });
    };
    HeaderComponent.prototype.checkAndStoreAccessToken = function () {
        if (location.href.indexOf(this.tokenPrefix) >= 0) {
            var locationParts = location.href.split('&')[0].split(this.tokenPrefix);
            this.animeService.setAccessToken(locationParts[1]);
            history.replaceState({}, 'Login success', locationParts[0]);
            this.updateUserData();
        }
    };
    HeaderComponent.prototype.updateUserData = function () {
        var _this = this;
        this.animeService.queryUser().subscribe(function (response) {
            _this.animeService.setUser(response.Viewer);
            _this.user = _this.animeService.getUser();
            _this.navigateToUserList(true);
        });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__providers_anime_service__["a" /* AnimeService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/list-entry-form-modal/list-entry-form-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"header\">\n  {{ media.title.romaji }}\n</h3>\n\n<mat-divider></mat-divider>\n\n<div class=\"content\">\n  <form [formGroup]=\"listEntryForm\" (ngSubmit)=\"saveEntry()\">\n\n    <!-- status -->\n    <div class=\"form-group\">\n      <mat-form-field>\n        <mat-select placeholder=\"Status\" formControlName=\"statusValue\">\n          <mat-option *ngFor=\"let status of mediaStatusList\" [value]=\"status.value\">\n            {{ status.label }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <!-- score -->\n    <div class=\"form-group\">\n      <mat-form-field class=\"score-input\">\n        <mat-label>Score</mat-label>\n        <input\n          matInput type=\"number\" min=\"0\" max=\"10\" step=\".1\"\n          [placeholder]=\"listEntry ? listEntry.scoreRaw / 10 : 5\" formControlName=\"score\" required>\n      </mat-form-field> / 10\n    </div>\n\n    <!--<mat-slider min=\"0\" max=\"10\" value=\"5\" step=\"0.5\" tickInterval=\"2\" class=\"full-width no-padding\"></mat-slider>-->\n\n    <mat-divider class=\"padding-bottom-xs\"></mat-divider>\n\n    <!--<span *ngIf=\"listEntry !== undefined\">-->\n      <!--<button mat-raised-button color=\"warn\" class=\"margin-right-s square-button\" (click)=\"deleteEntry($event)\">-->\n        <!--<i class=\"fa fa-trash fa-1x baseline\"></i>-->\n      <!--</button>-->\n    <!--</span>-->\n\n    <span class=\"float-right\">\n      <button mat-raised-button color=\"accent\" class=\"margin-right-xs\" [disabled]=\"!listEntryForm.valid\">\n        <i class=\"fa fa-send fa-1x baseline margin-right-xxxs\"></i>\n        Submit\n      </button>\n\n      <button mat-raised-button class=\"float-right\" (click)=\"dismiss($event)\">\n        <i class=\"fa fa-times fa-1x baseline margin-right-xxxs\"></i>\n        Cancel\n      </button>\n    </span>\n\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/list-entry-form-modal/list-entry-form-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* generic */\n/* specific */\n.header {\n  margin: 0 0 16px; }\n\n.content {\n  margin: 16px 0 0; }\n  .content .form-group {\n    margin: auto; }\n  .content mat-form-field {\n    width: 100%; }\n    .content mat-form-field.score-input {\n      width: 64px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/list-entry-form-modal/list-entry-form-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListEntryFormModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_anime_service__ = __webpack_require__("../../../../../src/app/providers/anime.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_anilist_mediaStatus__ = __webpack_require__("../../../../../src/app/models/anilist/mediaStatus.ts");
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





var ListEntryFormModalComponent = (function () {
    function ListEntryFormModalComponent(animeService, formBuilder, dialogRef, data) {
        this.animeService = animeService;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.mediaStatusList = __WEBPACK_IMPORTED_MODULE_4__models_anilist_mediaStatus__["a" /* MediaStatus */].LIST;
        this.listEntry = data.listEntry;
        this.listEntryStatus = data.listEntryStatus;
        this.media = data.media;
        this.setupForm();
    }
    ListEntryFormModalComponent.prototype.setupForm = function () {
        this.listEntryForm = this.formBuilder.group({
            statusValue: [this.listEntryStatus || __WEBPACK_IMPORTED_MODULE_4__models_anilist_mediaStatus__["a" /* MediaStatus */].COMPLETED, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]],
            score: [undefined, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].max(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].min(0)]]
        });
    };
    ListEntryFormModalComponent.prototype.saveEntry = function () {
        var _this = this;
        var listEntry = {
            media: this.media,
            scoreRaw: this.listEntryForm.value.score * 10
        };
        var listEntryRequest = Object.assign({}, listEntry);
        listEntryRequest.statusValue = this.listEntryForm.value.statusValue;
        this.animeService.saveListEntry(listEntryRequest).subscribe(function (response) {
            var success = response.data.SaveMediaListEntry.id !== undefined;
            if (success) {
                listEntry.media = _this.media;
                _this.dialogRef.close({
                    savedEntry: listEntry
                });
            }
        });
    };
    ListEntryFormModalComponent.prototype.deleteEntry = function (event) {
        var _this = this;
        this.preventDefault(event);
        this.animeService.deleteListEntry(this.listEntry).subscribe(function (response) {
            var success = response.data.DeleteMediaListEntry.deleted === true;
            if (success) {
                _this.dialogRef.close({
                    deletedEntry: _this.listEntry
                });
            }
        });
    };
    ListEntryFormModalComponent.prototype.dismiss = function (event) {
        this.preventDefault(event);
        this.dialogRef.close();
    };
    ListEntryFormModalComponent.prototype.preventDefault = function (event) {
        if (event) {
            event.preventDefault();
        }
    };
    ListEntryFormModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-entry-form-modal',
            template: __webpack_require__("../../../../../src/app/components/list-entry-form-modal/list-entry-form-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/list-entry-form-modal/list-entry-form-modal.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_anime_service__["a" /* AnimeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogRef */], Object])
    ], ListEntryFormModalComponent);
    return ListEntryFormModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/search-results-table/search-results-table.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-table #table [dataSource]=\"dataSource\" [hidden]=\"!dataSource || dataSource.data.length < 1\" class=\"series-table\">\n\n  <ng-container matColumnDef=\"cover-image\">\n    <mat-header-cell *matHeaderCellDef>\n      Cover\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let anime\">\n      <app-cover-image [media]=\"anime\"></app-cover-image>\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"title\">\n    <mat-header-cell *matHeaderCellDef>\n      Title\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let anime\">\n      <span class=\"padding-right-xxxs\">\n        {{ anime.title.romaji }}\n      </span>\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"format\">\n    <mat-header-cell *matHeaderCellDef>\n      Format\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let anime\">\n      {{ anime.format }}\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"start-date\">\n    <mat-header-cell *matHeaderCellDef>\n      Year\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let anime\">\n      {{ anime.startDate.year }}\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"genres\">\n    <mat-header-cell *matHeaderCellDef>\n      Genres\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let anime\">\n      <mat-list>\n        <mat-list-item *ngFor=\"let genre of anime.genres\">\n          <mat-chip>\n            {{ genre }}\n          </mat-chip>\n        </mat-list-item>\n      </mat-list>\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"mean-score\">\n    <mat-header-cell *matHeaderCellDef>\n      Score\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let anime\">\n      {{ anime.meanScore / 10 }}/10\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"episodes\">\n    <mat-header-cell *matHeaderCellDef>\n      Episodes\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let anime\">\n      {{ anime.episodes }}\n    </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"tableRows\"></mat-header-row>\n  <mat-row *matRowDef=\"let rowData; columns: tableRows\"></mat-row>\n\n</mat-table>"

/***/ }),

/***/ "../../../../../src/app/components/search-results-table/search-results-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search-results-table/search-results-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultsTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchResultsTableComponent = (function () {
    function SearchResultsTableComponent() {
        this.tableRows = ['cover-image', 'title', 'format', 'start-date', 'genres', 'mean-score', 'episodes'];
    }
    SearchResultsTableComponent.prototype.ngOnInit = function () {
    };
    SearchResultsTableComponent.prototype.ngOnChanges = function (changes) {
        if (changes.tableData.currentValue !== changes.tableData.previousValue) {
            this.initializeDataSource();
        }
    };
    SearchResultsTableComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
    };
    SearchResultsTableComponent.prototype.initializeDataSource = function () {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatTableDataSource */](this.tableData);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], SearchResultsTableComponent.prototype, "tableData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */])
    ], SearchResultsTableComponent.prototype, "sort", void 0);
    SearchResultsTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-results-table',
            template: __webpack_require__("../../../../../src/app/components/search-results-table/search-results-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/search-results-table/search-results-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchResultsTableComponent);
    return SearchResultsTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-list-table/user-list-table.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-table #table [dataSource]=\"dataSource\" [hidden]=\"!dataSource || dataSource.data.length < 1\" matSort class=\"series-table\">\n\n  <ng-container matColumnDef=\"cover-image\">\n    <mat-header-cell *matHeaderCellDef>\n      Cover\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let entry\">\n      <app-cover-image\n        [listEntryStatus]=\"tableStatus\"\n        [listEntry]=\"entry\"\n        [media]=\"entry.media\"\n        (onUpdate)=\"onUpdate($event)\">\n      </app-cover-image>\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"title\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>\n      Title\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let entry\">\n      <span class=\"padding-right-xxxs\">\n        {{ entry.media.title.romaji }}\n      </span>\n      <i *ngIf=\"favouriteIDs && favouriteIDs.indexOf(entry.media.id) >= 0\"\n         class=\"fa fa-heart fa-1x favourite\">\n      </i>\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"format\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>\n      Format\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let entry\">\n      {{ entry.media.format }}\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"start-date\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header start=\"desc\">\n      Year\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let entry\">\n      {{ entry.media.startDate.year }}\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"genres\">\n    <mat-header-cell *matHeaderCellDef>\n      Genres\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let entry\">\n      <mat-list>\n        <mat-list-item *ngFor=\"let genre of entry.media.genres\">\n          <mat-chip>\n            {{ genre }}\n          </mat-chip>\n        </mat-list-item>\n      </mat-list>\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"score\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header start=\"desc\">\n      Score\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let entry\">\n      {{ entry.scoreRaw / 10 }}/10\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"episodes\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header start=\"desc\">\n      Episodes\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let entry\">\n      {{ entry.media.episodes }}\n    </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"tableRows\"></mat-header-row>\n  <mat-row *matRowDef=\"let rowData; columns: tableRows\"></mat-row>\n\n</mat-table>\n\n<mat-paginator\n  #paginator\n  [pageSize]=\"10\"\n  [pageSizeOptions]=\"[5, 10, 25, 50, 75, 100, 250, 500, 750, 1000]\"\n  [showFirstLastButtons]=\"true\">\n</mat-paginator>"

/***/ }),

/***/ "../../../../../src/app/components/user-list-table/user-list-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fa.favourite {\n  padding: 3px 0 0;\n  color: #F50057; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-list-table/user-list-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserListTableComponent = (function () {
    function UserListTableComponent() {
        this.onEntryUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.tableRows = ['cover-image', 'title', 'format', 'start-date', 'genres', 'score', 'episodes'];
    }
    UserListTableComponent.prototype.ngAfterViewInit = function () {
        // TODO: Fix ExpressionChangedAfterItHasBeenCheckedError
        this.initializeDataSource();
        this.bindChildComponents();
    };
    UserListTableComponent.prototype.ngOnChanges = function (changes) {
        this.dataSource.filter = changes.filter.currentValue;
    };
    UserListTableComponent.prototype.onUpdate = function (listEntry) {
        this.onEntryUpdate.emit(listEntry);
    };
    UserListTableComponent.prototype.initializeDataSource = function () {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatTableDataSource */](this.tableData);
    };
    UserListTableComponent.prototype.bindChildComponents = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.sortingDataAccessor = function (listEntry, property) {
            var anime = listEntry.media;
            return {
                'title': anime.title.romaji.toLowerCase(),
                'format': anime.format.toLowerCase(),
                'start-date': +anime.startDate.year,
                'genres': anime.genres.length ? anime.genres[0] : '',
                'score': +listEntry.scoreRaw,
                'episodes': +anime.episodes
            }[property];
        };
        this.dataSource.filterPredicate = function (listEntry, filter) {
            return listEntry.media.title.romaji.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) >= 0;
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], UserListTableComponent.prototype, "tableStatus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], UserListTableComponent.prototype, "tableData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], UserListTableComponent.prototype, "favouriteIDs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], UserListTableComponent.prototype, "filter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], UserListTableComponent.prototype, "onEntryUpdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */])
    ], UserListTableComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatPaginator */])
    ], UserListTableComponent.prototype, "paginator", void 0);
    UserListTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-list-table',
            template: __webpack_require__("../../../../../src/app/components/user-list-table/user-list-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-list-table/user-list-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserListTableComponent);
    return UserListTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/anilist/listEntry.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListEntry; });
var ListEntry = (function () {
    function ListEntry() {
    }
    return ListEntry;
}());



/***/ }),

/***/ "../../../../../src/app/models/anilist/media.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Media; });
var Media = (function () {
    function Media() {
    }
    return Media;
}());



/***/ }),

/***/ "../../../../../src/app/models/anilist/mediaFormats.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaFormat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enumMap__ = __webpack_require__("../../../../../src/app/models/enumMap.ts");
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

var MediaFormat = (function (_super) {
    __extends(MediaFormat, _super);
    function MediaFormat(value) {
        return _super.call(this, value, MediaFormat.LIST, true) || this;
    }
    MediaFormat.TV = 'TV';
    MediaFormat.TV_SHORT = 'TV_SHORT';
    MediaFormat.MOVIE = 'MOVIE';
    MediaFormat.SPECIAL = 'SPECIAL';
    MediaFormat.OVA = 'OVA';
    MediaFormat.ONA = 'ONA';
    MediaFormat.MUSIC = 'MUSIC';
    MediaFormat.LIST = [
        { label: 'TV', value: 'TV' },
        { label: 'TV short', value: 'TV_SHORT' },
        { label: 'Movie', value: 'MOVIE' },
        { label: 'Special', value: 'SPECIAL' },
        { label: 'OVA', value: 'OVA' },
        { label: 'ONA', value: 'ONA' },
        { label: 'Music', value: 'MUSIC' }
    ];
    return MediaFormat;
}(__WEBPACK_IMPORTED_MODULE_0__enumMap__["a" /* EnumMap */]));



/***/ }),

/***/ "../../../../../src/app/models/anilist/mediaSorts.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mediaSorts; });
var mediaSorts = [
    { label: 'Title (asc)', value: 'TITLE_ROMAJI' },
    { label: 'Title (desc)', value: 'TITLE_ROMAJI_DESC' },
    { label: 'Year (asc)', value: 'START_DATE' },
    { label: 'Year (desc)', value: 'START_DATE_DESC' },
    { label: 'Year (asc)', value: 'START_DATE' },
    { label: 'Year (desc)', value: 'START_DATE' }
];



/***/ }),

/***/ "../../../../../src/app/models/anilist/mediaStatus.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaStatus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enumMap__ = __webpack_require__("../../../../../src/app/models/enumMap.ts");
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

var MediaStatus = (function (_super) {
    __extends(MediaStatus, _super);
    function MediaStatus(value) {
        return _super.call(this, value, MediaStatus.LIST, true) || this;
    }
    MediaStatus.CURRENT = 'current';
    MediaStatus.PLANNING = 'planning';
    MediaStatus.COMPLETED = 'completed';
    MediaStatus.DROPPED = 'dropped';
    MediaStatus.PAUSED = 'paused';
    MediaStatus.REPEATING = 'repeating';
    MediaStatus.LIST = [
        { label: 'Watching', value: 'current' },
        { label: 'Planned', value: 'planning' },
        { label: 'Completed', value: 'completed' },
        { label: 'Dropped', value: 'dropped' },
        { label: 'Paused', value: 'paused' },
        { label: 'Repeating', value: 'repeating' }
    ];
    return MediaStatus;
}(__WEBPACK_IMPORTED_MODULE_0__enumMap__["a" /* EnumMap */]));



/***/ }),

/***/ "../../../../../src/app/models/anilist/mediaType.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaTypes; });
var MediaTypes = (function () {
    function MediaTypes() {
    }
    MediaTypes.ANIME = 'ANIME';
    return MediaTypes;
}());



/***/ }),

/***/ "../../../../../src/app/models/enumMap.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnumMap; });
var EnumMap = (function () {
    function EnumMap(value, mapping, ignoreCase) {
        var matches = mapping.filter(function (mediaType) {
            return ignoreCase ? mediaType.value.toLowerCase() === value.toLowerCase() : mediaType.value === value;
        });
        if (matches.length) {
            return matches[0];
        }
    }
    return EnumMap;
}());



/***/ }),

/***/ "../../../../../src/app/modules/material.module.ts":
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
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatGridListModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatListModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatMenuModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatNativeDateModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatPaginatorModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatRadioModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSelectModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSliderModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSlideToggleModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatSortModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatTooltipModule */]
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

/***/ "../../../../../src/app/pages/anime-search/anime-search.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\n\n  <mat-card class=\"text-center\">\n\n    <h1>\n      <label for=\"searchInput\">\n        Anime search\n      </label>\n    </h1>\n\n    <div class=\"form-group\">\n      <mat-form-field class=\"medium display-block margin-auto\">\n        <input id=\"searchInput\" matInput placeholder=\"Anime title\" formControlName=\"search\">\n      </mat-form-field>\n    </div>\n\n    <!--<mat-form-field id=\"yearInput\">-->\n      <!--<input matInput [matDatepicker]=\"startDatePicker\" placeholder=\"Year\" disabled>-->\n      <!--<mat-datepicker-toggle matSuffix [for]=\"startDatePicker\"></mat-datepicker-toggle>-->\n      <!--<mat-datepicker #startDatePicker disabled=\"false\" startView=\"year\"></mat-datepicker>-->\n    <!--</mat-form-field>-->\n\n    <mat-expansion-panel class=\"mat-elevation-z padding-bottom-s search-filters\">\n      <mat-expansion-panel-header>\n        Advanced filters\n      </mat-expansion-panel-header>\n\n      <mat-divider></mat-divider>\n\n      <div class=\"vertical-padding-xs\">\n\n        <!-- air date -->\n        <div class=\"form-group two-rows\">\n          <mat-form-field class=\"medium\">\n            <input\n                matInput type=\"number\"\n                placeholder=\"Aired after year\"\n                formControlName=\"startDate_greater\"\n                [min]=\"minYear\" [max]=\"maxYear\"\n            >\n          </mat-form-field>\n\n          <mat-form-field class=\"medium\">\n            <input\n                matInput type=\"number\"\n                placeholder=\"Aired before year\"\n                formControlName=\"startDate_lesser\"\n                [min]=\"minYear\" [max]=\"maxYear\"\n            >\n          </mat-form-field>\n        </div>\n\n        <!-- score -->\n        <div class=\"form-group two-rows\">\n          <mat-form-field class=\"medium\">\n            <input\n                matInput type=\"number\"\n                placeholder=\"Scored above\"\n                formControlName=\"averageScore_greater\"\n                min=\"0\" max=\"10\" step=\".1\"\n            >\n          </mat-form-field>\n\n          <mat-form-field class=\"medium\">\n            <input\n                matInput type=\"number\"\n                placeholder=\"Scored below\"\n                formControlName=\"averageScore_lesser\"\n                min=\"0\" max=\"10\" step=\".1\"\n            >\n          </mat-form-field>\n        </div>\n\n        <!-- formats -->\n        <div class=\"form-group\">\n          <mat-form-field class=\"large\">\n            <mat-select placeholder=\"Format\" #formatInput formControlName=\"formats\" multiple>\n              <mat-option *ngFor=\"let mediaFormat of mediaFormats\" [value]=\"mediaFormat.value\">\n                {{ mediaFormat.label }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n        <!-- genres -->\n        <div class=\"form-group\">\n          <mat-form-field class=\"large\">\n            <mat-select placeholder=\"Genre\" formControlName=\"genres\" multiple>\n              <mat-option *ngFor=\"let genre of mediaGenres\" [value]=\"genre\">\n                {{ genre }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n      </div>\n\n      <mat-divider></mat-divider>\n\n    </mat-expansion-panel>\n\n    <button mat-raised-button color=\"accent\" class=\"display-block margin-auto\" [disabled]=\"!searchForm.valid\">\n      <i class=\"fa fa-search fa-1x baseline margin-right-xxxs\"></i>\n      Search\n    </button>\n\n  </mat-card>\n\n  <mat-progress-bar *ngIf=\"searching\" mode=\"indeterminate\"></mat-progress-bar>\n  <div *ngIf=\"!searching\" class=\"progress-placeholder\"></div>\n\n  <mat-card *ngIf=\"errorGotten\" class=\"error\">\n    <h4>\n      <i class=\"fa fa-exclamation-circle fa-1x margin-right-xxs\"></i>\n      Error 500: Internal server error\n    </h4>\n  </mat-card>\n\n  <mat-card *ngIf=\"noResults\" class=\"info\">\n    <h4>\n      <i class=\"fa fa-info-circle fa-1x margin-right-xxs\"></i>\n      No results found\n    </h4>\n  </mat-card>\n\n  <mat-card *ngIf=\"animeList && animeList.length > 0\" class=\"no-padding\">\n    <app-search-results-table [tableData]=\"animeList\"></app-search-results-table>\n\n    <mat-paginator\n      [length]=\"pagination.total\"\n      [pageSize]=\"pagination.perPage\"\n      [pageSizeOptions]=\"[5, 10, 25, 50]\"\n      (page)=\"changePage($event)\">\n    </mat-paginator>\n  </mat-card>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/pages/anime-search/anime-search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* generic */\n/* specific */\nmat-form-field {\n  width: 100%; }\n\n.form-group {\n  max-width: 640px;\n  margin: auto; }\n  @media (min-width: 481px) {\n    .form-group.two-rows > * {\n      max-width: calc(50% - 16px); }\n      .form-group.two-rows > *:first-child {\n        float: left; }\n      .form-group.two-rows > *:last-child {\n        float: right; } }\n\n.progress-placeholder {\n  height: 5px; }\n\nmat-card:not(:first-of-type) {\n  margin-top: 24px; }\n\nmat-expansion-panel-header {\n  padding: 0 8px; }\n\n@media (max-width: 480px) {\n  button {\n    width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/anime-search/anime-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimeSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_anime_service__ = __webpack_require__("../../../../../src/app/providers/anime.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_anilist_mediaFormats__ = __webpack_require__("../../../../../src/app/models/anilist/mediaFormats.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnimeSearchComponent = (function () {
    function AnimeSearchComponent(animeService, formBuilder) {
        this.animeService = animeService;
        this.formBuilder = formBuilder;
        this.mediaFormats = __WEBPACK_IMPORTED_MODULE_3__models_anilist_mediaFormats__["a" /* MediaFormat */].LIST;
        this.minYear = 1900;
        this.maxYear = new Date().getFullYear() + 1;
        this.user = this.animeService.getUser();
        this.setupForm();
        this.getGenres();
    }
    AnimeSearchComponent.prototype.setupForm = function () {
        this.searchForm = this.formBuilder.group({
            search: [''],
            startDate_greater: [undefined, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].min(this.minYear), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].max(this.maxYear)]],
            startDate_lesser: [undefined, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].min(this.minYear), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].max(this.maxYear)]],
            averageScore_greater: [undefined, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].min(0), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].max(10)]],
            averageScore_lesser: [undefined, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].min(0), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].max(10)]],
            formats: [],
            genres: []
        });
    };
    AnimeSearchComponent.prototype.search = function (page, perPage) {
        var _this = this;
        this.searching = true;
        this.errorGotten = false;
        var query = {
            search: this.searchForm.value.search,
            formats: this.searchForm.value.formats,
            genres: this.searchForm.value.genres
        };
        if (this.searchForm.value.startDate_lesser) {
            query.startDate_lesser = this.getDateScalarFromYear(this.searchForm.value.startDate_lesser);
        }
        if (this.searchForm.value.startDate_greater) {
            query.startDate_greater = this.getDateScalarFromYear(this.searchForm.value.startDate_greater - 1) + 1231;
        }
        if (this.searchForm.value.averageScore_greater) {
            query.averageScore_greater = this.searchForm.value.averageScore_greater * 10;
        }
        if (this.searchForm.value.averageScore_lesser) {
            query.averageScore_lesser = this.searchForm.value.averageScore_lesser * 10;
        }
        var pageInfo = {
            pageIndex: page,
            perPage: perPage
        };
        this.animeService.search(query, pageInfo).subscribe(function (response) {
            _this.noResults = response.media.length < 1;
            _this.animeList = response.media;
            _this.pagination = response.pageInfo;
            _this.searching = false;
        }, function () {
            _this.errorGotten = true;
            _this.noResults = false;
            _this.searching = false;
        });
    };
    AnimeSearchComponent.prototype.getGenres = function () {
        var _this = this;
        this.animeService.getGenres().subscribe(function (mediaGenres) {
            _this.mediaGenres = mediaGenres;
        });
    };
    AnimeSearchComponent.prototype.getDateScalarFromYear = function (year) {
        return year * 10000;
    };
    AnimeSearchComponent.prototype.changePage = function (pageEvent) {
        this.search(pageEvent.pageIndex + 1, pageEvent.pageSize);
    };
    AnimeSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-anime-search',
            template: __webpack_require__("../../../../../src/app/pages/anime-search/anime-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/anime-search/anime-search.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_anime_service__["a" /* AnimeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], AnimeSearchComponent);
    return AnimeSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div class=\"text-center vertical-padding-m\">\n    <h2>\n      <a [href]=apiLoginUrl>Log in with AniList</a>\n    </h2>\n  </div>\n</mat-card>"

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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


var LoginComponent = (function () {
    function LoginComponent() {
        this.apiLoginUrl = __WEBPACK_IMPORTED_MODULE_1__app_constants__["a" /* apiLoginUrl */];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"inline-block text-center\">\r\n  <i class=\"fa fa-exclamation-circle fa-5x\"></i>\r\n  <h1>\r\n    Error 404\r\n  </h1>\r\n  <h2>\r\n    Page not found\r\n  </h2>\r\n</mat-card>"

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"!loggedIn\" class=\"warning\">\n  <h4>\n    <i class=\"fa fa-exclamation-circle fa-1x margin-right-xxs\"></i>\n    You are not logged in.\n    <a [href]=apiLoginUrl>Log in with AniList</a>.\n  </h4>\n</mat-card>\n\n<mat-spinner *ngIf=\"loggedIn && !ready\" mode=\"indeterminate\" class=\"full-page\"></mat-spinner>\n\n<div *ngIf=\"loggedIn && ready && !errorGotten\">\n\n  <mat-card class=\"table-filter\">\n    <mat-form-field class=\"full-width\">\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter by name\">\n    </mat-form-field>\n  </mat-card>\n\n  <mat-card class=\"margin-top-s\">\n    <h3>\n      Show / Go to\n    </h3>\n\n    <div class=\"statuses-wrapper\">\n      <span *ngFor=\"let status of statuses\" class=\"status-wrapper\">\n        <mat-checkbox [(ngModel)]=\"status.shown\"></mat-checkbox>\n\n        <a *ngIf=\"hasDataOfStatus(status.value)\" href=\"{{ '/user-list#' + status.value }}\" class=\"capitalize\">\n          {{ status.label }}\n        </a>\n      </span>\n    </div>\n  </mat-card>\n\n  <div *ngFor=\"let status of statuses\">\n    <div *ngIf=\"status.shown && hasDataOfStatus(status.value)\" class=\"status-table-wrapper\">\n\n      <h3 [id]=\"status.value\" class=\"capitalize\">\n        {{ status.label }}\n      </h3>\n\n      <mat-card class=\"no-padding\">\n        <app-user-list-table\n          [tableStatus]=\"status.value\"\n          [tableData]=\"statusObjects[status.value]\"\n          [favouriteIDs]=\"favouriteIDs\"\n          [filter]=\"filter\"\n          (onEntryUpdate)=\"onEntryUpdate($event)\">\n        </app-user-list-table>\n      </mat-card>\n\n    </div>\n  </div>\n\n  <div class=\"padding-top-xs padding-bottom-m\">\n    <h3>\n      Settings\n    </h3>\n\n    <mat-slide-toggle\n            [checked]=\"reloadOnUpdate\"\n            (change)=\"reloadOnUpdate = !reloadOnUpdate\">\n      Reload on update\n    </mat-slide-toggle>\n  </div>\n\n  <app-genres-overview\n    [genreStatsList]=\"user.stats.favouredGenresOverview\">\n  </app-genres-overview>\n\n</div>\n\n<mat-card *ngIf=\"errorGotten\" class=\"error\">\n  <h4>\n    <i class=\"fa fa-exclamation-circle fa-1x margin-right-xxs\"></i>\n    Error 500: Internal server error\n  </h4>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/pages/user-list/user-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* spacing */\n/* font sizes */\n/* device sizes */\n/* material */\n/* generic */\n/* specific */\n.table-filter {\n  padding-top: 8px !important;\n  padding-bottom: 0 !important; }\n\n.statuses-wrapper mat-checkbox {\n  display: inline-block;\n  vertical-align: text-bottom; }\n\n.statuses-wrapper .status-wrapper {\n  margin-right: 16px;\n  display: inline-block;\n  min-width: 104px; }\n\n.status-table-wrapper:not(:last-of-type) {\n  margin-bottom: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_anime_service__ = __webpack_require__("../../../../../src/app/providers/anime.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_anilist_mediaStatus__ = __webpack_require__("../../../../../src/app/models/anilist/mediaStatus.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserListComponent = (function () {
    function UserListComponent(router, animeService) {
        this.router = router;
        this.animeService = animeService;
        this.reloadOnUpdate = true;
        this.apiLoginUrl = __WEBPACK_IMPORTED_MODULE_3__app_constants__["a" /* apiLoginUrl */];
        this.user = this.animeService.getUser();
        this.loggedIn = this.user !== undefined;
        this.updateListData();
    }
    UserListComponent.prototype.getUserList = function () {
        var _this = this;
        if (this.user) {
            this.animeService.getList(this.user).subscribe(function (response) {
                _this.statusObjects = response;
                var statusValues = Object.keys(response).sort();
                var statuses = [];
                statusValues.forEach(function (statusValue) {
                    var status = new __WEBPACK_IMPORTED_MODULE_4__models_anilist_mediaStatus__["a" /* MediaStatus */](statusValue);
                    status.shown = true;
                    statuses.push(status);
                });
                _this.statuses = statuses;
                _this.ready = true;
            }, function (error) {
                _this.errorGotten = true;
                _this.ready = true;
            });
        }
    };
    UserListComponent.prototype.getListFavouriteIDs = function () {
        var _this = this;
        if (this.user) {
            this.animeService.getListFavouriteIDs(this.user, function (favouriteIDs) {
                _this.favouriteIDs = favouriteIDs;
            });
        }
    };
    UserListComponent.prototype.hasDataOfStatus = function (status) {
        return this.statusObjects &&
            this.statusObjects[status] &&
            this.statusObjects[status].length > 0;
    };
    UserListComponent.prototype.applyFilter = function (filterValue) {
        this.filter = filterValue.trim().toLowerCase();
    };
    UserListComponent.prototype.getListAsString = function () {
        return JSON.stringify(this.statusObjects, undefined, 2);
    };
    UserListComponent.prototype.onEntryUpdate = function (listEntry) {
        if (this.reloadOnUpdate) {
            this.updateListData();
        }
    };
    UserListComponent.prototype.updateListData = function () {
        this.statusObjects = undefined;
        this.statuses = undefined;
        this.favouriteIDs = undefined;
        this.ready = false;
        this.getUserList();
        this.getListFavouriteIDs();
    };
    UserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-list',
            template: __webpack_require__("../../../../../src/app/pages/user-list/user-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/user-list/user-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__providers_anime_service__["a" /* AnimeService */]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/sort.ts":
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
            name: 'sort',
        })
    ], SortPipe);
    return SortPipe;
}());



/***/ }),

/***/ "../../../../../src/app/providers/anime.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_anilist_mediaFormats__ = __webpack_require__("../../../../../src/app/models/anilist/mediaFormats.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_anilist_mediaStatus__ = __webpack_require__("../../../../../src/app/models/anilist/mediaStatus.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_anilist_mediaType__ = __webpack_require__("../../../../../src/app/models/anilist/mediaType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_anilist_mediaSorts__ = __webpack_require__("../../../../../src/app/models/anilist/mediaSorts.ts");
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
    function AnimeService(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = 'https://graphql.anilist.co';
        this.fallbackCover = 'assets/pictures/non-vectorial/no-cover-available.png';
        this.accessTokenKey = 'accessToken';
        this.userKey = 'user';
        this.initializeQueries();
    }
    AnimeService.prototype.setAccessToken = function (accessToken) {
        localStorage.setItem(this.accessTokenKey, accessToken);
    };
    AnimeService.prototype.getAccessToken = function () {
        return localStorage.getItem(this.accessTokenKey);
    };
    AnimeService.prototype.removeAccessToken = function () {
        localStorage.removeItem(this.accessTokenKey);
    };
    AnimeService.prototype.setUser = function (user) {
        localStorage.setItem(this.userKey, JSON.stringify(user));
    };
    AnimeService.prototype.getUser = function () {
        var jsonString = localStorage.getItem(this.userKey);
        return jsonString ? JSON.parse(jsonString) : undefined;
    };
    AnimeService.prototype.removeUser = function () {
        localStorage.removeItem(this.userKey);
    };
    AnimeService.prototype.getGenres = function () {
        var _this = this;
        return this.httpClient.post(this.apiUrl, {
            query: this.genresQuery
        }, this.getRequestOptions()).map(function (response) {
            var serverResponse;
            if (_this.isValidResponse(response)) {
                serverResponse = _this.getResponseData(response).GenreCollection;
            }
            return serverResponse;
        });
    };
    AnimeService.prototype.search = function (query, pageInfo) {
        var _this = this;
        var options = {
            type: __WEBPACK_IMPORTED_MODULE_5__models_anilist_mediaType__["a" /* MediaTypes */].ANIME,
            adultContent: query.adultContent || false,
            page: pageInfo.pageIndex >= 1 ? pageInfo.pageIndex : 1,
            perPage: pageInfo.perPage || 10,
            sort: [__WEBPACK_IMPORTED_MODULE_6__models_anilist_mediaSorts__["a" /* mediaSorts */][0].value]
        };
        if (query.search) {
            options.search = query.search;
        }
        if (query.startDate_greater) {
            options.startDate_greater = query.startDate_greater;
        }
        if (query.startDate_lesser) {
            options.startDate_lesser = query.startDate_lesser;
        }
        if (query.averageScore_greater) {
            options.averageScore_greater = query.averageScore_greater;
        }
        if (query.averageScore_lesser) {
            options.averageScore_lesser = query.averageScore_lesser;
        }
        if (query.formats && query.formats.length) {
            options.formats = query.formats;
        }
        if (query.genres && query.genres.length) {
            options.genres = query.genres;
        }
        return this.httpClient.post(this.apiUrl, {
            query: this.searchQuery,
            variables: options
        }).map(function (response) {
            var serverResponse;
            if (_this.isValidResponse(response)) {
                serverResponse = _this.getResponseData(response).Page;
                serverResponse.media.forEach(function (anime) {
                    _this.parseAnimeData(anime);
                });
            }
            return serverResponse;
        });
    };
    AnimeService.prototype.queryUser = function () {
        var _this = this;
        return this.httpClient.post(this.apiUrl, {
            query: this.userQuery
        }, this.getRequestOptions()).map(function (response) {
            var serverResponse;
            if (_this.isValidResponse(response)) {
                serverResponse = _this.getResponseData(response);
            }
            return serverResponse;
        });
    };
    AnimeService.prototype.getList = function (user) {
        var _this = this;
        var options = {
            listType: __WEBPACK_IMPORTED_MODULE_5__models_anilist_mediaType__["a" /* MediaTypes */].ANIME,
            userId: user.id,
            sort: ['SCORE_DESC']
        };
        return this.httpClient.post(this.apiUrl, {
            query: this.listQuery,
            variables: options
        }, this.getRequestOptions()).map(function (response) {
            var statusLists = [];
            var statusObjects = [];
            if (_this.isValidResponse(response)) {
                statusObjects = _this.getResponseData(response).MediaListCollection.statusLists;
                Object.keys(statusObjects).forEach(function (status) {
                    statusObjects[status].forEach(function (entry) {
                        _this.parseAnimeData(entry.media);
                    });
                });
            }
            return statusObjects;
        });
    };
    AnimeService.prototype.getListFavourites = function (user, callback) {
        var options = {
            userId: user.id,
            page: 0
        };
        var favourites = [];
        this.queryResultsPage(options, favourites, callback);
    };
    AnimeService.prototype.queryResultsPage = function (options, favourites, callback) {
        var _this = this;
        this.httpClient.post(this.apiUrl, {
            query: this.listFavouritesQuery,
            variables: options
        }, this.getRequestOptions()).subscribe(function (response) {
            var results = [];
            if (_this.isValidResponse(response)) {
                var responseData = _this.getResponseData(response);
                if (responseData && responseData.User && responseData.User.favourites && responseData.User.favourites.anime) {
                    var favouritesData = responseData.User.favourites.anime;
                    results = favouritesData.nodes;
                    favourites = favourites.concat(results);
                    if (favouritesData.pageInfo.hasNextPage) {
                        options.page++;
                        _this.queryResultsPage(options, favourites, callback);
                    }
                    else {
                        callback(favourites);
                    }
                }
            }
        });
    };
    AnimeService.prototype.getListFavouriteIDs = function (user, callback) {
        this.getListFavourites(user, function (listFavourites) {
            var favouriteIDs = [];
            listFavourites.forEach(function (media) {
                favouriteIDs.push(media.id);
            });
            callback(favouriteIDs);
        });
    };
    AnimeService.prototype.saveListEntry = function (listEntryRequest) {
        var options = {
            status: (listEntryRequest.statusValue.toUpperCase() || __WEBPACK_IMPORTED_MODULE_4__models_anilist_mediaStatus__["a" /* MediaStatus */].COMPLETED).toUpperCase(),
            mediaId: listEntryRequest.media.id,
            scoreRaw: listEntryRequest.scoreRaw
        };
        return this.httpClient.post(this.apiUrl, {
            query: this.saveListEntryQuery,
            variables: options
        }, this.getRequestOptions());
    };
    AnimeService.prototype.deleteListEntry = function (listEntry) {
        var options = {
            id: listEntry.id
        };
        return this.httpClient.post(this.apiUrl, {
            query: this.deleteListEntryQuery,
            variables: options
        }, this.getRequestOptions());
    };
    AnimeService.prototype.toggleFavouriteEntry = function (listEntry) {
        var options = {
            animeId: listEntry.media.id
        };
        return this.httpClient.post(this.apiUrl, {
            query: this.toggleFavouriteEntryQuery,
            variables: options
        }, this.getRequestOptions());
    };
    AnimeService.prototype.getRequestOptions = function () {
        var headers = {};
        if (this.getAccessToken()) {
            headers.Authorization = "Bearer " + this.getAccessToken();
        }
        return { headers: headers };
    };
    AnimeService.prototype.isValidResponse = function (response) {
        return response && response.data;
    };
    AnimeService.prototype.getResponseData = function (response) {
        return response.data;
    };
    AnimeService.prototype.parseAnimeData = function (anime) {
        anime.format = new __WEBPACK_IMPORTED_MODULE_3__models_anilist_mediaFormats__["a" /* MediaFormat */](anime.format).label;
        if (anime.coverImage && anime.coverImage.medium === 'https://cdn.anilist.co/img/dir/anime/med/noimg.jpg') {
            anime.coverImage.medium = this.fallbackCover;
        }
    };
    AnimeService.prototype.initializeQueries = function () {
        this.genresQuery = "\n      {\n        GenreCollection\n      }";
        this.animeFields = "\n      id\n      title {\n        romaji\n      }\n      startDate {\n        year\n      },\n      episodes\n      coverImage {\n        medium\n      },\n      genres\n      meanScore,\n      format";
        this.userQuery = "\n      {\n        Viewer {\n          id\n          name\n          avatar {\n            large\n          }\n          options {\n            displayAdultContent\n          }\n          stats {\n            watchedTime\n            favouredGenresOverview {\n              genre\n              amount\n              meanScore\n              timeWatched\n            }\n          }\n        }\n      }";
        this.searchQuery = "\n      query (\n        $id: Int,\n        $page: Int,\n        $perPage: Int,\n        $search: String,\n        $type: MediaType,\n        $sort: [MediaSort],\n        $startDate_greater: FuzzyDateInt,\n        $startDate_lesser: FuzzyDateInt,\n        $averageScore_greater: Int,\n        $averageScore_lesser: Int,\n        $formats: [MediaFormat],\n        $genres: [String],\n        $adultContent: Boolean\n      ) {\n        Page (\n          page: $page,\n          perPage: $perPage\n        ) {\n          pageInfo {\n            total\n            currentPage\n            lastPage\n            hasNextPage\n            perPage\n          }\n          media (\n            id: $id,\n            search: $search,\n            type: $type,\n            isAdult: $adultContent,\n            sort: $sort,\n            startDate_greater: $startDate_greater,\n            startDate_lesser: $startDate_lesser,\n            averageScore_greater: $averageScore_greater,\n            averageScore_lesser: $averageScore_lesser,\n            format_in: $formats,\n            genre_in: $genres\n          ) {\n            " + this.animeFields + "\n          }\n        }\n      }";
        this.listQuery = "\n      query (\n        $userId: Int!,\n        $listType: MediaType,\n        $sort: [MediaListSort]\n      ) {\n        MediaListCollection (\n          userId: $userId,\n          type: $listType,\n          sort: $sort\n        ) {\n          statusLists {\n            ... mediaListEntry\n          }\n        }\n      }\n  \n      fragment mediaListEntry on MediaList {\n        id\n        scoreRaw: score (\n          format: POINT_100\n        )\n        media {\n          " + this.animeFields + "\n        }\n      }";
        this.listFavouritesQuery = "\n      query (\n        $userId: Int!,\n        $page: Int\n      ) {\n        User (\n          id: $userId\n        ) {\n          favourites {\n            anime (\n              page: $page\n            ) {\n              nodes {\n                " + this.animeFields + "\n              }\n              pageInfo {\n                total\n                currentPage\n                lastPage\n                hasNextPage\n                perPage\n              }\n            }\n          }\n        }\n      }";
        this.saveListEntryQuery = "\n      mutation (\n        $mediaId: Int,\n        $status: MediaListStatus,\n        $scoreRaw: Int\n      ) {\n        SaveMediaListEntry (\n          mediaId: $mediaId,\n          status: $status,\n          scoreRaw: $scoreRaw\n        ) {\n          id\n          status\n        }\n      }";
        this.deleteListEntryQuery = "\n      mutation (\n        $id: Int\n      ) {\n        DeleteMediaListEntry (id: $id) {\n          deleted\n        }\n      }";
        this.toggleFavouriteEntryQuery = "\n      mutation (\n        $animeId: Int\n      ) {\n        ToggleFavourite (\n          animeId: $animeId\n        ) {\n          anime {\n            nodes {\n              id\n              title {\n                userPreferred\n              }\n            }\n          }\n        }\n      }";
    };
    AnimeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AnimeService);
    return AnimeService;
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
    anilist_client_id: 324,
    production: false
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
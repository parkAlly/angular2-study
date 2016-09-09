"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var address_service_1 = require('../service/address.service');
var HomeComponent = (function () {
    function HomeComponent(addressService) {
        this.addressService = addressService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this._contectData = this.addressService.getContectData();
    };
    HomeComponent.prototype.handleSetSearchData = function (name) {
        console.log(name);
        this._searchText = name;
    };
    HomeComponent.prototype.handleToggleFavorite = function (userID) {
        this._contectData = this.addressService.setToggleFavorite(userID);
    };
    HomeComponent.prototype.handleDeleteUser = function (userID) {
        this._contectData = this.addressService.setDeleteUser(userID);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'addressHome',
            styles: [
                "\n    .btn-place {\n      padding: 3px;\n      margin-right: 10px;\n      position: absolute;\n      top: 0px;\n      right: 0px;\n    }\n    .nav-font {\n      font-size: 1.0em;\n      color: #337ab7;\n      border: 1px solid #337ab7;\n      border-radius: 5px;\n      padding: 1px 4px 1px 4px;\n    }\n    .home-info {\n      height: 400px;\n      background-color: #d9d9d9;\n    }\n    .home-info > p {\n      text-align : center;\n    }\n    #firstTitle{\n      padding-top: 140px;\n    }\n    "
            ],
            template: "\n    <div class=\"btn-place\">\n      <a class=\"nav-font\" routerLink=\"/list\">All CONTACT</a>\n      <a class=\"nav-font\" routerLink=\"/management\">NEW</a>\n    </div>\n    <div class=\"home-info\">\n      <p id=\"firstTitle\">Ally's AddressBook</p>\n      <p><i class=\"fa fa-users fa-5x\" aria-hidden=\"true\"></i></p>\n    </div>\n    <searchBox (handleSendName) = \"handleSetSearchData($event)\"></searchBox>\n    <contactTable [contactData] = \"_contectData\" [searchText] = \"_searchText\" [page]=\"'home'\"\n      (handleToggleFavorite) = \"handleToggleFavorite($event)\"\n      (handleDeleteUser) = \"handleDeleteUser($event)\"\n      ></contactTable>\n  ",
            providers: [address_service_1.AddressService]
        }), 
        __metadata('design:paramtypes', [address_service_1.AddressService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map
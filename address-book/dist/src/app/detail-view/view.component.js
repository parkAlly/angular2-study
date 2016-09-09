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
var ViewComponent = (function () {
    function ViewComponent(addressService) {
        this.addressService = addressService;
    }
    ViewComponent.prototype.ngOnInit = function () {
        this._contectData = this.addressService.getContectData();
    };
    ViewComponent.prototype.handleSetSearchData = function (name) {
        console.log(name);
        this._searchText = name;
    };
    ViewComponent.prototype.handleToggleFavorite = function (userID) {
        this._contectData = this.addressService.setToggleFavorite(userID);
    };
    ViewComponent.prototype.handleDeleteUser = function (userID) {
        this._contectData = this.addressService.setDeleteUser(userID);
    };
    ViewComponent = __decorate([
        core_1.Component({
            selector: 'address-view',
            styles: [
                "\n    .btn-place {\n      padding: 3px;\n      margin-right: 10px;\n      position: absolute;\n      top: 0px;\n      right: 0px;\n    }\n    .nav-font {\n      font-size: 1.0em;\n      color: #337ab7;\n      border: 1px solid #337ab7;\n      border-radius: 5px;\n      padding: 1px 4px 1px 4px;\n    }\n    "
            ],
            template: "\n    <div class=\"btn-place\">\n      <a class=\"nav-font\" routerLink=\"/management\">NEW</a>\n    </div>\n    <search-box (handleSendName) = \"handleSetSearchData($event)\"></search-box>\n    <contact-table [contactData] = \"_contectData\" [searchText] = \"_searchText\" [page]=\"'view'\"\n      (handleToggleFavorite) = \"handleToggleFavorite($event)\"\n      (handleDeleteUser) = \"handleDeleteUser($event)\"\n      ></contact-table>\n  ",
            providers: [address_service_1.AddressService]
        }), 
        __metadata('design:paramtypes', [address_service_1.AddressService])
    ], ViewComponent);
    return ViewComponent;
}());
exports.ViewComponent = ViewComponent;
//# sourceMappingURL=view.component.js.map
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
var address_data_1 = require('./address.data');
var AddressService = (function () {
    function AddressService() {
        this._contectData = address_data_1.ContactData;
        this._originContectData = address_data_1.ContactData;
    }
    AddressService.prototype.getContectData = function () {
        return this._contectData;
    };
    AddressService.prototype.setToggleFavorite = function (userIndex) {
        var favoriteState = this._contectData[userIndex].favorite;
        this._contectData[userIndex].favorite = !favoriteState;
        return this._contectData;
    };
    AddressService.prototype.setDeleteUser = function (userIndex) {
        this._contectData.splice(userIndex, 1);
        return this._contectData;
    };
    AddressService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AddressService);
    return AddressService;
}());
exports.AddressService = AddressService;
//# sourceMappingURL=address.service.js.map
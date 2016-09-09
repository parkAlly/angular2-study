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
    /* origin배열에서 선택한 user index를 return해줌 */
    AddressService.prototype.getUserCurrentIndex = function (userID) {
        var userIndex;
        this._contectData.forEach(function (user, arrindex) {
            if (userID === user.uID) {
                userIndex = arrindex;
                return;
            }
        });
        return userIndex;
    };
    /* 즐겨찾기 추가 or 해제 */
    AddressService.prototype.setToggleFavorite = function (userID) {
        var userIndex = this.getUserCurrentIndex(userID);
        var favoriteState = this._contectData[userIndex].favorite;
        this._contectData[userIndex].favorite = !favoriteState;
        return this._contectData;
    };
    /* 유저 삭제 */
    AddressService.prototype.setDeleteUser = function (userID) {
        var userIndex = this.getUserCurrentIndex(userID);
        this._contectData.splice(userIndex, 1);
        return this._contectData;
    };
    /* 유저 추가 */
    AddressService.prototype.serInsertUser = function (userInfo) {
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
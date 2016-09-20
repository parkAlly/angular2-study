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
var http_1 = require('@angular/http');
var rxjs_1 = require('rxjs');
var address_data_1 = require('./address.data');
var AddressService = (function () {
    function AddressService(http) {
        var _this = this;
        this.http = http;
        this._contactData = address_data_1.ContactData;
        this._origincontactData = address_data_1.ContactData;
        // _contactData : AddressInterface[];
        // _origincontactData : AddressInterface[];
        this._newUserDataForm = {
            uID: this._contactData ? this._contactData.length : 0,
            img: 'data:image/png;base64,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',
            name: '',
            num: '',
            favorite: false,
            hashTag: ''
        };
        // getContactData(): Observable<AddressInterface[]> {
        //   return this.http
        //           .get('src/app/service/address.json')
        //           .map((res) => this._responseToJson(res))
        //           .catch(this._handleError);
        // }
        this._responseToJson = function (res) {
            _this._contactData = JSON.parse(res._body).data;
            console.log('this._contactData', _this._contactData);
            return _this._contactData;
        };
        this._handleError = function (error) {
            return rxjs_1.Observable.throw(error);
        };
    }
    AddressService.prototype.getContactData = function () {
        return this._contactData;
    };
    AddressService.prototype.getNewUser = function () {
        return this._newUserDataForm;
    };
    /* origin배열에서 선택한 user index를 return해줌 */
    AddressService.prototype.getUserCurrentIndex = function (userID) {
        var userIndex;
        this._contactData.forEach(function (user, arrindex) {
            if (userID === user.uID) {
                userIndex = arrindex;
                return;
            }
        });
        return userIndex;
    };
    /* 선택한 유저 정보 리턴 */
    AddressService.prototype.getSelectUserData = function (userID) {
        console.log('this._contactData', this._contactData);
        var userIndex = this.getUserCurrentIndex(userID);
        return this._contactData[userIndex];
    };
    /* 즐겨찾기 추가 or 해제 */
    AddressService.prototype.setToggleFavorite = function (userID) {
        var userIndex = this.getUserCurrentIndex(userID);
        var favoriteState = this._contactData[userIndex].favorite;
        this._contactData[userIndex].favorite = !favoriteState;
        return this._contactData;
    };
    /* 유저 삭제 */
    AddressService.prototype.setDeleteUser = function (userID) {
        var userIndex = this.getUserCurrentIndex(userID);
        this._contactData.splice(userIndex, 1);
        return this._contactData;
    };
    /* 유저 추가 */
    AddressService.prototype.setInsertUser = function (userInfo) {
        // console.log(this._contactData );
        // this._contactData.push(userInfo);
        return this._contactData;
    };
    /* 유저 수정 */
    AddressService.prototype.setUpdateUser = function (userInfo) {
        var userIndex = this.getUserCurrentIndex(userInfo.uID);
        this._contactData[userIndex] = userInfo;
        return this._contactData;
    };
    AddressService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AddressService);
    return AddressService;
}());
exports.AddressService = AddressService;
//# sourceMappingURL=address.service.js.map
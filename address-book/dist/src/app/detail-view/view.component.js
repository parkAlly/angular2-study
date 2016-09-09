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
var router_1 = require('@angular/router');
var address_service_1 = require('../service/address.service');
var ViewComponent = (function () {
    function ViewComponent(addressService, route) {
        this.addressService = addressService;
        this.route = route;
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['uID'];
            _this._selectUserData = _this.addressService.getSelectUserData(id);
        });
    };
    ViewComponent = __decorate([
        core_1.Component({
            selector: 'addressView',
            styles: [
                "\n    .btn-place {\n      padding: 3px;\n      margin-right: 10px;\n      position: absolute;\n      top: 0px;\n      right: 0px;\n    }\n    .nav-font {\n      font-size: 1.0em;\n      color: #337ab7;\n      border: 1px solid #337ab7;\n      border-radius: 5px;\n      padding: 1px 4px 1px 4px;\n    }\n    .detail-area{\n      margin: 20px;\n    }\n    .section{\n      border-bottom: 1px solid #d9d9d9;\n      padding-bottom: 5px;\n      margin-bottom: 5px;\n    }\n    .user-pic-area{\n      display: inline-block;\n      margin: 20px;\n      width: 80px;\n      height: 80px;\n    }\n    .user-pic-area > img{\n      position: relative;\n      border-radius: 50%;\n      width: 100%;\n      height: 100%;\n    }\n    .user-name{\n      font-size: 2em;\n      color: #6E6E6E;\n    }\n    .user-action-icon{\n      z-index : 999;\n      float: right;\n      padding-left: 10px;\n      color: #9FE8FF;\n    }\n    .sub-title{\n      color: #00BFFF;\n      font-size: 0.9em;\n    }\n    .hashtag-result{\n      padding-bottom: 5px;\n    }\n    .hashtag-item{\n      border-radius: 30px;\n      border: 1px solid #46BBDF;\n      background-color: #9FE8FF;\n      padding: 5px;\n      margin-right: 5px;\n      color: #125D73;\n    }\n    .hashtag-none > span {\n      text-align: center;\n      color: #d9d9d9;\n      font-weight: 600;\n      font-size: 1em;\n    }\n\n    "
            ],
            template: "\n    <div class=\"btn-place\">\n      <a class=\"nav-font\" routerLink=\"/home\">HOME</a>\n      <a class=\"nav-font\" routerLink=\"/list\">All CONTACTLIST</a>\n      <a class=\"nav-font\" routerLink=\"/management\">EDIT</a>\n    </div>\n    <div class=\"detail-area\">\n      <div class=\"section fst\">\n        <div class=\"title\">\n          <div class=\"user-pic-area\">\n            <img src={{_selectUserData?.img}}/>\n          </div>\n          <span class=\"user-name\">{{_selectUserData?.name}}</span>\n        </div>\n        <div class=\"phone-info\">\n          <p class=\"sub-title\" id=\"phone\">\uD734\uB300\uC804\uD654</p>\n          <span>{{_selectUserData?.num | phoneRegExp}}</span>\n          <span class=\"user-action-icon\">\n            <contactIcon [phoneNumber] = \"_selectUserData?.num\" [contactType] = \"'call'\"></contactIcon>\n          </span>\n          <span class=\"user-action-icon\">\n            <contactIcon [phoneNumber] = \"_selectUserData?.num\" [contactType] = \"'message'\"></contactIcon>\n          </span>\n        </div>\n      </div>\n      <div class=\"section sec\">\n        <div class=\"hashtag\">\n          <p class=\"sub-title\" id=\"hash\">\uD574\uC26C\uD0DC\uADF8</p>\n          <div class=\"hashtag-none\" *ngIf=\"_selectUserData?.hashList.length === 0\">\n            <span> \uD574\uC26C\uD0DC\uADF8\uB97C \uCD94\uAC00\uD574\uC8FC\uC138\uC694! </span>\n          </div>\n          <div class=\"hashtag-result\" *ngIf=\"_selectUserData?.hashList.length !== 0\">\n            <span *ngFor=\"let teg of _selectUserData?.hashList\" class=\"hashtag-item\">\n              #{{teg}}\n            </span>\n          </div>\n        </div>\n      </div>\n\n\n    </div>\n  ",
            providers: [address_service_1.AddressService]
        }), 
        __metadata('design:paramtypes', [address_service_1.AddressService, router_1.ActivatedRoute])
    ], ViewComponent);
    return ViewComponent;
}());
exports.ViewComponent = ViewComponent;
//# sourceMappingURL=view.component.js.map
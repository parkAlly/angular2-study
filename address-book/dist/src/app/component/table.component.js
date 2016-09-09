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
var ContactTableComponent = (function () {
    function ContactTableComponent() {
        this.handleToggleFavorite = new core_1.EventEmitter();
        this.handleDeleteUser = new core_1.EventEmitter();
    }
    ContactTableComponent.prototype.ngOnInit = function () { };
    // ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    //   console.log('changes',changes);
    // }
    ContactTableComponent.prototype.handleClickFavorite = function ($event, userID) {
        // tr event가 먹히는 것을 방지
        $event.stopPropagation();
        this.handleToggleFavorite.emit(userID);
    };
    ContactTableComponent.prototype.handleClickDelete = function ($event, userID) {
        $event.stopPropagation();
        this.handleDeleteUser.emit(userID);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ContactTableComponent.prototype, "contactData", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ContactTableComponent.prototype, "searchText", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ContactTableComponent.prototype, "page", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ContactTableComponent.prototype, "handleToggleFavorite", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ContactTableComponent.prototype, "handleDeleteUser", void 0);
    ContactTableComponent = __decorate([
        core_1.Component({
            selector: 'contactTable',
            styles: ["\n    #noData {\n      text-align: center;\n      color: #d9d9d9;\n      font-weight: 600;\n      font-size: 2em;\n    }\n    .user-action-icon{\n      z-index : 999;\n    }\n    .user-pic-area{\n      width: 30px;\n      height: 30px;\n    }\n    .user-pic-area > img{\n      position: relative;\n      border-radius: 50%;\n      width: 100%;\n      height: 100%;\n    }\n    "],
            template: "\n    <div class=\"table-area col-md-12 col-sm-12 col-lg-12\">\n        <table class=\"table table-hover\">\n          <tbody>\n            <tr *ngFor=\"let user of (contactData | userFilter:searchText:page); let i = index; trackBy: trackByFn\"\n              routerLink=\"/view/{{user.uID}}\">\n              <td>\n                <div class=\"user-pic-area\">\n                  <img src={{user.img}}/>\n                </div>\n              </td>\n              <td>{{user.name}}</td>\n              <td>{{user.num}}</td>\n              <td class=\"user-action-icon\">\n                <i class=\"fa\" [ngClass]=\"{'fa-star': user.favorite , 'fa-star-o': !user.favorite}\"\n                  aria-hidden=\"true\" (click)=\"handleClickFavorite($event,user.uID)\"></i>\n              </td>\n              <td class=\"user-action-icon\">\n                <contactIcon [phoneNumber] = \"user.num\" [contactType] = \"'message'\"></contactIcon>\n              </td>\n              <td class=\"user-action-icon\">\n                <contactIcon [phoneNumber] = \"user.num\" [contactType] = \"'call'\"></contactIcon>\n              </td>\n              <td class=\"user-action-icon\">\n                <i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"handleClickDelete($event,user.uID)\"></i>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n    </div>\n    <div *ngIf=\"(contactData | userFilter:searchText:page) === null\">\n      <p id=\"noData\">\uACB0\uACFC\uC5C6\uC74C</p>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ContactTableComponent);
    return ContactTableComponent;
}());
exports.ContactTableComponent = ContactTableComponent;
//# sourceMappingURL=table.component.js.map
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
var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        core_1.Component({
            selector: 'addressManagement',
            styles: [
                "\n    .btn-place {\n      padding: 3px;\n      margin-right: 10px;\n      position: absolute;\n      top: 0px;\n      right: 0px;\n    }\n    .nav-font {\n      font-size: 1.0em;\n      color: #337ab7;\n      border: 1px solid #337ab7;\n      border-radius: 5px;\n      padding: 1px 4px 1px 4px;\n    }\n    "
            ],
            template: "\n    <div class=\"btn-place\">\n      <a class=\"nav-font\" routerLink=\"/home\">HOME</a>\n      <a class=\"nav-font\" routerLink=\"/list\">All CONTACTLIST</a>\n      <a class=\"nav-font\" (click)=\"handleDoSave($event)\">SAVE</a>\n    </div>\n    <div>PAGE NOT FOUND !!! </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;
//# sourceMappingURL=page-not-found.component.js.map
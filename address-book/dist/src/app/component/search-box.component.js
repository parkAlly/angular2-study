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
var SearchBoxComponent = (function () {
    function SearchBoxComponent() {
        this.handleSendName = new core_1.EventEmitter();
    }
    SearchBoxComponent.prototype.ngOnInit = function () { };
    SearchBoxComponent.prototype.setName = function ($event) {
        this.handleSendName.emit($event.target.value);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchBoxComponent.prototype, "handleSendName", void 0);
    SearchBoxComponent = __decorate([
        core_1.Component({
            selector: 'search-box',
            styles: ["\n    .search-area{\n      padding : 5px;\n      background-color : #d9d9d9;\n    }\n\n    #search {\n      position: relative;\n      font-size: 18px;\n      padding-top: 10px;\n      margin: -20px auto 0;\n    }\n\n    #search label{\n      position: absolute;\n      left: 20px;\n      top: 14px;\n    }\n\n    #searchBox {\n      display: block;\n      width: 95%;\n      height: 34px;\n      padding: 6px 30px;\n      font-size: 14px;\n      line-height: 1.42857143;\n      color: #555;\n      background-color: #fff;\n      background-image: none;\n      border: 1px solid #ccc;\n      border-radius: 4px;\n      margin: 0 auto;\n      border-radius: 45px;\n    }\n\n    #search #search-clear{\n      ext-decoration: none;\n      position: absolute;\n      right: 20px;\n      top: 18px;\n      color: #b3b3b3;\n    }\n\n    "],
            template: "\n    <div class=\"search-area col-md-12 col-sm-12 col-lg-12\">\n      <section id=\"search\">\n        <label for=\"searchBox\">\n          <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n          <span class=\"sr-only\">Search icons</span>\n        </label>\n        <input id=\"searchBox\" class=\"form-control input-lg\" placeholder=\"\uC774\uB984\uC744 \uAC80\uC0C9\uD574\uC8FC\uC138\uC694.\" (keyup)=\"setName($event)\">\n        <a id=\"search-clear\" href=\"#\" class=\"fa fa-times-circle\" aria-hidden=\"true\"><span class=\"sr-only\">Clear search</span></a>\n      </section>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());
exports.SearchBoxComponent = SearchBoxComponent;
//# sourceMappingURL=search-box.component.js.map
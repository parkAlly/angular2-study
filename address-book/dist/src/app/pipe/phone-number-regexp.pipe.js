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
var phoneRegExpPipe = (function () {
    function phoneRegExpPipe() {
    }
    phoneRegExpPipe.prototype.transform = function (phoneNumber) {
        var regExp = "(\\d{3})(\\d{3,4})(\\d{4})";
        return phoneNumber ? phoneNumber.replace(/regExp/gi, "$1-$2-$3") : null;
    };
    phoneRegExpPipe = __decorate([
        core_1.Pipe({
            name: 'phoneRegExp',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], phoneRegExpPipe);
    return phoneRegExpPipe;
}());
exports.phoneRegExpPipe = phoneRegExpPipe;
//# sourceMappingURL=phone-number-regexp.pipe.js.map
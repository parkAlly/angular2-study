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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_routing_1 = require('./app.routing');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home/home.component');
var list_component_1 = require('./list/list.component');
var view_component_1 = require('./detail-view/view.component');
var management_component_1 = require('./detail-management/management.component');
var search_box_component_1 = require('./component/search-box.component');
var table_component_1 = require('./component/table.component');
var contact_icon_component_1 = require('./component/contact-icon.component');
var user_filter_pipe_1 = require('./pipe/user-filter.pipe');
var pageComponent = [
    app_component_1.AppComponent,
    home_component_1.HomeComponent,
    list_component_1.ListComponent,
    view_component_1.ViewComponent,
    management_component_1.ManagementComponent
];
var shareComponent = [
    search_box_component_1.SearchBoxComponent,
    table_component_1.ContactTableComponent,
    contact_icon_component_1.ContactIconComponent
];
var pipe = [
    user_filter_pipe_1.userFilterPipe
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing
            ],
            declarations: pageComponent.concat(shareComponent, pipe),
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
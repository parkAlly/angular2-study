"use strict";
var router_1 = require('@angular/router');
var page_not_found_component_1 = require('./page-not-found.component');
var home_component_1 = require('./home/home.component');
var list_component_1 = require('./list/list.component');
var view_component_1 = require('./detail-view/view.component');
var management_component_1 = require('./detail-management/management.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'list',
        component: list_component_1.ListComponent
    },
    {
        path: 'view/:uID',
        component: view_component_1.ViewComponent
    },
    {
        path: 'management/:type',
        component: management_component_1.ManagementComponent
    },
    {
        path: 'management/:type/:uID',
        component: management_component_1.ManagementComponent
    },
    {
        path: '**',
        component: page_not_found_component_1.PageNotFoundComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
"use strict";
var router_1 = require('@angular/router');
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
        path: 'view',
        component: view_component_1.ViewComponent
    },
    {
        path: 'management',
        component: management_component_1.ManagementComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
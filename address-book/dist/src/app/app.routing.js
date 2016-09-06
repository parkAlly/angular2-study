"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var list_component_1 = require('./list/list.component');
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
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);

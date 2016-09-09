import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { HomeComponent }  from './home/home.component';
import { ListComponent }  from './list/list.component';
import { ViewComponent }  from './detail-view/view.component';
import { ManagementComponent }  from './detail-management/management.component';

const appRoutes: Routes = [
  {
   path: '',
   redirectTo: '/home',
   pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'view/:uID',
    component: ViewComponent
  },
  {
    path: 'management',
    component: ManagementComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { PageNotFoundComponent }   from './page-not-found.component';
import { HomeComponent }  from './home/home.component';
import { ListComponent }  from './list/list.component';
import { ViewComponent }  from './detail-view/view.component';
import { ManagementComponent }  from './detail-management/management.component';

import { CheckSaveService } from './service/check-save.service';

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
    path: 'management/:type',
    canDeactivate: [CheckSaveService],
    component: ManagementComponent
  },
  {
    path: 'management/:type/:uID',
    canDeactivate: [CheckSaveService],
    component: ManagementComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

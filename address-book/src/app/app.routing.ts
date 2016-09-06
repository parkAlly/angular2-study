import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { HomeComponent }  from './home/home.component';
import { ListComponent }  from './list/list.component';

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

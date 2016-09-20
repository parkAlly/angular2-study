import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { routing }        from './app.routing';
import { AppComponent }   from './app.component';
import { PageNotFoundComponent }   from './page-not-found.component';
import { HomeComponent }  from './home/home.component';
import { ListComponent }  from './list/list.component';
import { ViewComponent }  from './detail-view/view.component';
import { ManagementComponent }  from './detail-management/management.component';

import { SearchBoxComponent }  from './component/search-box.component';
import { ContactTableComponent }  from './component/table.component';
import { ContactIconComponent }  from './component/contact-icon.component';

import { userFilterPipe } from './pipe/user-filter.pipe';
import { phoneRegExpPipe } from './pipe/phone-number-regexp.pipe';

import { AddressService } from './service/address.service';
import { CheckSaveService } from './service/check-save.service';

const pageComponent = [
  AppComponent,
  HomeComponent,
  ListComponent,
  ViewComponent,
  ManagementComponent,
  PageNotFoundComponent
];

const shareComponent = [
  SearchBoxComponent,
  ContactTableComponent,
  ContactIconComponent
];

const pipe = [
  userFilterPipe,
  phoneRegExpPipe
];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    ...pageComponent,
    ...shareComponent,
    ...pipe
  ],
  providers: [
    AddressService,
    CheckSaveService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

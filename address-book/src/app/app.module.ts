import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { routing }        from './app.routing';
import { AppComponent }   from './app.component';
import { HomeComponent }  from './home/home.component';
import { ListComponent }  from './list/list.component';
import { ViewComponent }  from './detail-view/view.component';
import { ManagementComponent }  from './detail-management/management.component';

import { SearchBoxComponent }  from './component/search-box.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    ViewComponent,
    ManagementComponent,

    SearchBoxComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

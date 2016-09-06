import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { routing }        from './app.routing';
import { AppComponent }   from './app.component';
import { HomeComponent }  from './home/home.component';
import { ListComponent }  from './list/list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { Component } from '@angular/core';

@Component({
  selector : 'my-app',
  styles:[
    `
    #header-bar {
      background-color : #d9d9d9;
      height : 33px;
      span {
        color : red;
      }
    }
    `
  ],
  template : `
      <div class="col-lg-12" id="header-bar">
        <span> Ally Address Book </span>
      </div>


       <router-outlet></router-outlet>
       `
})

export class AppComponent {}

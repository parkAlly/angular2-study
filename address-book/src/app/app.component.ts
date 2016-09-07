import { Component } from '@angular/core';

@Component({
  selector : 'my-app',
  styles:[
    `
    #header-bar {
      background-color : #d9d9d9;
      span {
        color : red;
      }
    }
    `
  ],
  template : `
  <div class="col-lg-12" id="header-bar"><span> Ally Address Book </span></div>



  <h1> <span> Ally Address Book </span> </h1>
       <a routerLink="/home">home</a>
       <a routerLink="/list">list</a>
       <a routerLink="/view">view</a>
       <a routerLink="/management">management</a>
       <router-outlet></router-outlet>
       `
})

export class AppComponent {}

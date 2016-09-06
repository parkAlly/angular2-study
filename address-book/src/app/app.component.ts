import { Component } from '@angular/core';

@Component({
  selector : 'my-app',
  template : `<h1> Ally Address Book </h1>
       <a routerLink="/home">home</a>
       <a routerLink="/list">list</a>
       <router-outlet></router-outlet>
       `
})

export class AppComponent {}

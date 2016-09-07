import { Component, Input } from '@angular/core';

@Component({
  selector: 'address-home',
  styles:[
    `
    .btn-place {
      padding: 3px;
      margin-right: 10px;
      position: absolute;
      top: 0px;
      right: 0px;
    }
    .nav-font {
      font-size: 1.0em;
      color: #337ab7;
      border: 1px solid #337ab7;
      border-radius: 5px;
      padding: 1px 4px 1px 4px;
    }
    `
  ],
  template: `
    <div class="btn-place">
      <a class="nav-font" routerLink="/view">All</a>
      <a class="nav-font" routerLink="/management">NEW</a>
    </div>
    <search-box></search-box>
  `
})
export class HomeComponent {
}

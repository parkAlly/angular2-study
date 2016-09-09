import { Component, Input } from '@angular/core';

@Component({
  selector: 'addressManagement',
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
      <a class="nav-font" routerLink="/home">HOME</a>
      <a class="nav-font" routerLink="/list">All CONTACTLIST</a>
      <a class="nav-font" (click)="handleDoSave($event)">SAVE</a>
    </div>
    <div>Detail Edit or NEW...</div>
  `,
})
export class ManagementComponent {

  handleDoSave($event : any){
    console.log('저장..');
  }
}

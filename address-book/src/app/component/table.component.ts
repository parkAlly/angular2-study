import { Component, OnInit, Input, Output, EventEmitter, OnChanges , SimpleChange} from '@angular/core';

import { NgClass } from '@angular/common';
import { AddressInterface } from '../service/address.interface';

@Component({
  selector: 'contactTable',
  styles:[`
    #noData {
      text-align: center;
      color: #d9d9d9;
      font-weight: 600;
      font-size: 2em;
    }
    .user-action-icon{
      z-index : 999;
    }
    `],
  template: `
    <div class="table-area col-md-12 col-sm-12 col-lg-12">
        <table class="table table-hover">
          <tbody>
            <tr *ngFor="let user of (contactData | userFilter:searchText:page); let i = index; trackBy: trackByFn"
              routerLink="/view">
              <td>사진위치</td>
              <td>{{user.name}}</td>
              <td>{{user.num}}</td>
              <td class="user-action-icon">
                <i class="fa" [ngClass]="{'fa-star': user.favorite , 'fa-star-o': !user.favorite}"
                  aria-hidden="true" (click)="handleClickFavorite($event,user.uID)"></i>
              </td>
              <td class="user-action-icon">
                <contactIcon [phoneNumber] = "user.num" [contactType] = "'message'"></contactIcon>
              </td>
              <td class="user-action-icon">
                <contactIcon [phoneNumber] = "user.num" [contactType] = "'call'"></contactIcon>
              </td>
              <td class="user-action-icon">
                <i class="fa fa-trash" aria-hidden="true" (click)="handleClickDelete($event,user.uID)"></i>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
    <div *ngIf="(contactData | userFilter:searchText:page) === null">
      <p id="noData">결과없음</p>
    </div>
  `
})
export class ContactTableComponent {
  @Input() contactData : AddressInterface[];
  @Input() searchText : string;
  @Input() page : string;
  @Output() handleToggleFavorite = new EventEmitter();
  @Output() handleDeleteUser = new EventEmitter();

  constructor() { }

  ngOnInit(){}

  // ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
  //   console.log('changes',changes);
  // }

  handleClickFavorite($event: any, userID : number){
    // tr event가 먹히는 것을 방지
    $event.stopPropagation();
    this.handleToggleFavorite.emit(userID);
  }

  handleClickDelete($event: any,userID : number){
    $event.stopPropagation();
    this.handleDeleteUser.emit(userID);
  }

}
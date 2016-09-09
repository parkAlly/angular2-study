import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { NgClass } from '@angular/common';
import { AddressInterface } from '../service/address.interface';

@Component({
  selector: 'contact-table',
  styles:[`
    #noData {
      text-align: center;
      color: #d9d9d9;
      font-weight: 600;
      font-size: 2em;
    }
    `],
  template: `
    <div class="table-area col-md-12 col-sm-12 col-lg-12">
        <table class="table table-hover">
          <tbody>
            <tr *ngFor="let user of (contactData | userFilter:searchText:page); let i = index; trackBy: trackByFn">
              <td>사진위치</td>
              <td>{{user.name}}</td>
              <td>{{user.num}}</td>
              <td>
                <i class="fa" [ngClass]="{'fa-star': user.favorite , 'fa-star-o': !user.favorite}"
                  aria-hidden="true" (click)="handleClickFavorite(i)"></i>
              </td>
              <td>
                <contact-icon [phoneNumber] = "user.num" [contactType] = "'message'"></contact-icon>
              </td>
              <td>
                <contact-icon [phoneNumber] = "user.num" [contactType] = "'call'"></contact-icon>
              </td>
              <td>
                <i class="fa fa-trash" aria-hidden="true" (click)="handleClickDelete(i)"></i>
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

  handleClickFavorite(userIndex : number){
    this.handleToggleFavorite.emit(userIndex);
  }

  handleClickDelete(userIndex : number){
    this.handleDeleteUser.emit(userIndex);
  }

}

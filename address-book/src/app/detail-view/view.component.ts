import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { AddressService } from '../service/address.service';
import { AddressInterface } from '../service/address.interface';

@Component({
  selector: 'addressView',
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
    .detail-area{
      margin: 20px;
    }
    .section{
      border-bottom: 1px solid #d9d9d9;
      padding-bottom: 5px;
      margin-bottom: 5px;
    }
    .user-pic-area{
      display: inline-block;
      margin: 20px;
      width: 80px;
      height: 80px;
    }
    .user-pic-area > img{
      position: relative;
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
    .user-name{
      font-size: 2em;
      color: #6E6E6E;
    }
    .user-action-icon{
      z-index : 999;
      float: right;
      padding-left: 10px;
      color: #9FE8FF;
    }
    .sub-title{
      color: #00BFFF;
      font-size: 0.9em;
    }
    .hashtag-result{
      padding-bottom: 5px;
    }
    .hashtag-item{
      border-radius: 30px;
      border: 1px solid #46BBDF;
      background-color: #9FE8FF;
      padding: 5px;
      margin-right: 5px;
      color: #125D73;
    }
    .hashtag-none > span {
      text-align: center;
      color: #d9d9d9;
      font-weight: 600;
      font-size: 1em;
    }

    `
  ],
  template: `
    <div class="btn-place">
      <a class="nav-font" routerLink="/home">HOME</a>
      <a class="nav-font" routerLink="/list">All CONTACTLIST</a>
      <a class="nav-font" routerLink="/management">EDIT</a>
    </div>
    <div class="detail-area">
      <div class="section fst">
        <div class="title">
          <div class="user-pic-area">
            <img src={{_selectUserData?.img}}/>
          </div>
          <span class="user-name">{{_selectUserData?.name}}</span>
        </div>
        <div class="phone-info">
          <p class="sub-title" id="phone">휴대전화</p>
          <span>{{_selectUserData?.num | phoneRegExp}}</span>
          <span class="user-action-icon">
            <contactIcon [phoneNumber] = "_selectUserData?.num" [contactType] = "'call'"></contactIcon>
          </span>
          <span class="user-action-icon">
            <contactIcon [phoneNumber] = "_selectUserData?.num" [contactType] = "'message'"></contactIcon>
          </span>
        </div>
      </div>
      <div class="section sec">
        <div class="hashtag">
          <p class="sub-title" id="hash">해쉬태그</p>
          <div class="hashtag-none" *ngIf="_selectUserData?.hashList.length === 0">
            <span> 해쉬태그를 추가해주세요! </span>
          </div>
          <div class="hashtag-result" *ngIf="_selectUserData?.hashList.length !== 0">
            <span *ngFor="let teg of _selectUserData?.hashList" class="hashtag-item">
              #{{teg}}
            </span>
          </div>
        </div>
      </div>


    </div>
  `,
  providers: [AddressService]
})
export class ViewComponent {
  constructor(
    private addressService: AddressService,
    private route: ActivatedRoute ) {}
  // _contectData : AddressInterface[];
  _selectUserData : AddressInterface;
  _searchText : string;

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['uID'];
      this._selectUserData = this.addressService.getSelectUserData(id);
    });
  }

}

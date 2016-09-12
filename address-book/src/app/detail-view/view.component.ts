import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
      border: 1px solid gainsboro;
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
  templateUrl: './view.component.html',
  providers: [AddressService]
})
export class ViewComponent {
  constructor(
    private addressService: AddressService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  _selectUserId : number;
  _selectUserData : AddressInterface;
  _searchText : string;

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this._selectUserId = +params['uID'];
      this._selectUserData = this.addressService.getSelectUserData(this._selectUserId);
    });
  }

  // 수정페이지로 이동
  handleGoEditPage(){
    this.router.navigate(['/management','edit',this._selectUserId]);
  }

}

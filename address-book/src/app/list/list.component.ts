import { Component, OnInit } from '@angular/core';
import { AddressService } from '../service/address.service';
import { AddressInterface } from '../service/address.interface';

@Component({
  selector: 'addressList',
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
      <a class="nav-font" routerLink="/management/new" routerLinkActive="active">NEW</a>
    </div>
    <searchBox (handleSendName) = "handleSetSearchData($event)"></searchBox>
    <contactTable [contactData] = "_contectData" [searchText] = "_searchText" [page]="'view'"
      (handleToggleFavorite) = "handleToggleFavorite($event)"
      (handleDeleteUser) = "handleDeleteUser($event)"
      ></contactTable>
  `
})
export class ListComponent {
  constructor(private addressService: AddressService) {}
  _contectData : AddressInterface[];
  _searchText : string;

  ngOnInit(){
    // this.addressService.getContactData().subscribe((res: any) => this._contectData = res);
    this._contectData = this.addressService.getContactData();
  }

  /* 검색어 입력 */
  handleSetSearchData(name: string){
    this._searchText = name;
  }
  /* 즐찾 버튼 토글 기능 */
  handleToggleFavorite(userID: number){
    this._contectData = this.addressService.setToggleFavorite(userID);
  }
  /* 유저 삭제 */
  handleDeleteUser(userID: number){
    this._contectData = this.addressService.setDeleteUser(userID);
  }
}

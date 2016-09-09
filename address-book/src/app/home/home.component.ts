import { Component, OnInit } from '@angular/core';
import { AddressService } from '../service/address.service';
import { AddressInterface } from '../service/address.interface';

@Component({
  selector: 'addressHome',
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
    .home-info {
      height: 400px;
      background-color: #d9d9d9;
    }
    .home-info > p {
      text-align : center;
    }
    #firstTitle{
      padding-top: 140px;
    }
    `
  ],
  template: `
    <div class="btn-place">
      <a class="nav-font" routerLink="/list">All CONTACT</a>
      <a class="nav-font" routerLink="/management">NEW</a>
    </div>
    <div class="home-info">
      <p id="firstTitle">Ally's AddressBook</p>
      <p><i class="fa fa-users fa-5x" aria-hidden="true"></i></p>
    </div>
    <searchBox (handleSendName) = "handleSetSearchData($event)"></searchBox>
    <contactTable [contactData] = "_contectData" [searchText] = "_searchText" [page]="'home'"
      (handleToggleFavorite) = "handleToggleFavorite($event)"
      (handleDeleteUser) = "handleDeleteUser($event)"
      ></contactTable>
  `,
  providers: [AddressService]
})
export class HomeComponent {
  constructor(private addressService: AddressService) {}
  _contectData : AddressInterface[];
  _searchText : string;

  ngOnInit(){
    this._contectData = this.addressService.getContectData();
  }

  handleSetSearchData(name: string){
    console.log(name);
    this._searchText = name;
  }

  handleToggleFavorite(userID: number){
    this._contectData = this.addressService.setToggleFavorite(userID);
  }

  handleDeleteUser(userID: number){
    this._contectData = this.addressService.setDeleteUser(userID);
  }

}

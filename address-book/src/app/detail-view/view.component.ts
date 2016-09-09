import { Component, OnInit } from '@angular/core';
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
    `
  ],
  template: `
    <div>Detail View...</div>
  `,
  providers: [AddressService]
})
export class ViewComponent {
  constructor(private addressService: AddressService) {}
  _contectData : AddressInterface[];
  _searchText : string;

  ngOnInit(){
    this._contectData = this.addressService.getContectData();
  }
}

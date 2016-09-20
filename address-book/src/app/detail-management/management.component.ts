import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, CanDeactivate } from '@angular/router';

import { CheckSaveService } from '../service/check-save.service';
import { AddressService } from '../service/address.service';
import { AddressInterface } from '../service/address.interface';
/*
https://github.com/Microsoft/TypeScript/issues/299
FileReader시 interface를 정의 안해주면 fre.target.value 부분에서 오류가 난다.
*/
interface FileReaderEventTarget extends EventTarget {
  result:string
}

interface FileReaderEvent extends Event {
    target: FileReaderEventTarget;
    getMessage():string;
}

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
    .detail-area{
      margin: 20px;
    }
    .section{
      border-bottom: 1px solid #d9d9d9;
      padding-bottom: 5px;
      margin-bottom: 5px;
    }
    .user-pic-area, .user-pic-edit{
      display: inline-block;
      margin: 20px;
      width: 80px;
      height: 80px;
    }
    .user-pic-edit{
      position: absolute;
      background-color: gainsboro;
      left: 20px;
      top: 80px;
      height: 30px;
      border-radius: 10px;
      opacity: 0.7;
    }
    .user-pic-edit > p{
      text-align: center;
      line-height: 30px;
      position: absolute;
      top: 0px;
      left: 15px;
    }
    .user-pic-edit > input{
      width: 100%;
      height: 100%;
      opacity: 0.0;
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
      width: 200px;
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
  templateUrl: './management.component.html'
})
export class ManagementComponent {

  _managementType: string;
  _selectedUserId: number;
  _selectUserData: AddressInterface;
  _changeToUserData : AddressInterface;

  constructor(
    private addressService: AddressService,
    private checkSaveService: CheckSaveService,
    private router: Router,
    private route: ActivatedRoute) {
  }


  /* edit의 경우 선택한 유저의 정보, new의 경우 새로운 폼 */
  ngOnInit(): void {
    this._changeToUserData = this.addressService.getNewUser(); //새로운 폼
    this.route.params.forEach((params: Params) => {
      this._managementType = params['type'];
      if(this._managementType === 'edit'){
        this._selectedUserId = +params['uID'];
        this._selectUserData = this.addressService.getSelectUserData(this._selectedUserId);
        this._changeToUserData = Object.assign({}, this._selectUserData);
      }
    });
  }

  /* 사진 변경 및 추가  -> base64 변환 */
  handleDoEditPic($event: any){
    let files = $event.target.files;
    let file = files[0];
    if (files && file) {
       let reader = new FileReader();
       let that = this;
       reader.onload = function(fre:FileReaderEvent) {
         let data = fre.target.result;
         that._changeToUserData.img = 'data:image/png;base64,' + btoa(data);
       }
       reader.readAsBinaryString(file);
    }
  }

  /* 변경 및 추가사항 저장 */
  handleDoSave(event : any){
    let returnValue:boolean = confirm("저장하시겠습니까 ?");
    let saveResult:boolean;

    if(returnValue){
      if(this._managementType === 'edit'){
        saveResult = this.addressService.setUpdateUser(this._changeToUserData);
      }else{
        saveResult = this.addressService.setInsertUser(this._changeToUserData);
      }
      if(saveResult){
        this.checkSaveService.isCheckedSave();
        this.router.navigate(['/list']);
      }
    }
  }

}

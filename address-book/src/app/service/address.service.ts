import { Injectable } from '@angular/core';
import { ContactData } from './address.data';

import { AddressInterface } from './address.interface';
@Injectable()
export class AddressService{
  _contectData : AddressInterface[] = ContactData;
  _originContectData : AddressInterface[] = ContactData;

  constructor() {}

  getContectData(){
    return this._contectData;
  }

  setToggleFavorite(userIndex: number){
    let favoriteState : boolean = this._contectData[userIndex].favorite;
    this._contectData[userIndex].favorite = !favoriteState;
    return this._contectData;
  }

  setDeleteUser(userIndex: number){
    this._contectData.splice(userIndex,1);
    return this._contectData;
  }
  /*
  추가기능
    추가 > http 통신으로 db 에 저장 > 저장성공 시 저장한 데이터 리턴

  삭제기능
    삭제 > http 통신으로 db 에서 삭제 > 삭제성공 시 삭제된 데이터 리턴

  즐겨찾기기능
    즐겨찾기 추가, 해제 > http 통신
  */
}

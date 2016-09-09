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

  /* origin배열에서 선택한 user index를 return해줌 */
  getUserCurrentIndex(userID: number){
    let userIndex : number ;

    this._contectData.forEach((user,arrindex) => {
      if(userID === user.uID){
        userIndex = arrindex;
        return;
      }
    });

    return userIndex;
  }

  /* 즐겨찾기 추가 or 해제 */
  setToggleFavorite(userID: number){
    let userIndex : number = this.getUserCurrentIndex(userID);
    let favoriteState : boolean = this._contectData[userIndex].favorite;
    this._contectData[userIndex].favorite = !favoriteState;
    return this._contectData;
  }

  /* 유저 삭제 */
  setDeleteUser(userID: number){
    let userIndex : number = this.getUserCurrentIndex(userID);
    this._contectData.splice(userIndex,1);
    return this._contectData;
  }

  /* 유저 추가 */
  serInsertUser(userInfo: AddressInterface[]){
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
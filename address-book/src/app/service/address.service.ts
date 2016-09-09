import { Injectable } from '@angular/core';
import { ContactData } from './address.data';

import { AddressInterface } from './address.interface';
@Injectable()
export class AddressService{
  _contactData : AddressInterface[] = ContactData;
  _origincontactData : AddressInterface[] = ContactData;

  constructor() {}

  getContactData(){
    return this._contactData;
  }

  /* origin배열에서 선택한 user index를 return해줌 */
  getUserCurrentIndex(userID: number){
    let userIndex : number ;

    this._contactData.forEach((user,arrindex) => {
      if(userID === user.uID){
        userIndex = arrindex;
        return;
      }
    });

    return userIndex;
  }

  /* 선택한 유저 정보 리턴 */
  getSelectUserData(userID: number){
    let userIndex : number = this.getUserCurrentIndex(userID);
    return this._contactData[userIndex];
  }

  /* 즐겨찾기 추가 or 해제 */
  setToggleFavorite(userID: number){
    let userIndex : number = this.getUserCurrentIndex(userID);
    let favoriteState : boolean = this._contactData[userIndex].favorite;
    this._contactData[userIndex].favorite = !favoriteState;
    return this._contactData;
  }

  /* 유저 삭제 */
  setDeleteUser(userID: number){
    let userIndex : number = this.getUserCurrentIndex(userID);
    this._contactData.splice(userIndex,1);
    return this._contactData;
  }

  /* 유저 추가 */
  serInsertUser(userInfo: AddressInterface[]){
    return this._contactData;
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

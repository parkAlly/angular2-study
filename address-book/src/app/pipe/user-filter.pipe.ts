import { Pipe, PipeTransform } from '@angular/core';
import { AddressInterface } from '../service/address.interface';

@Pipe({
  name: 'userFilter',
  pure: false
})
export class userFilterPipe implements PipeTransform {
  transform(contactData: AddressInterface[], name : string, type: string){
    if(name === undefined || name === ''){
      return type === 'home' ? null : contactData;
    }else{
      let filterResult = contactData.filter(user => (user.name.toLowerCase()).indexOf(name.toLowerCase()) > -1);
      return filterResult.length === 0 ? null : filterResult;
    }
  }
}


/*
type 이 home 일때에는 검색어가 없으면 결과가 없는게 default
type 이 list 일때에는 검색어가 없으도 전체결과가 있는게 default
*/

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

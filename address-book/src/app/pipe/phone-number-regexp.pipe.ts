import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneRegExp',
  pure: false
})
export class phoneRegExpPipe implements PipeTransform {
  transform(phoneNumber : string){
    let regExp:string = "(\\d{3})(\\d{3,4})(\\d{4})";

    return phoneNumber ? phoneNumber.replace(/regExp/gi, "$1-$2-$3") : null;
  }
}
